(() => {
  const USERS_KEY = "cinemaZone_users";
  const SESSION_KEY = "cinemaZone_session";

  function safeParseJSON(raw, fallback) {
    try {
      const parsed = JSON.parse(raw);
      return parsed ?? fallback;
    } catch {
      return fallback;
    }
  }

  function loadUsers() {
    const raw = localStorage.getItem(USERS_KEY);
    const users = raw ? safeParseJSON(raw, {}) : {};
    return users && typeof users === "object" ? users : {};
  }

  function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  function getSession() {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? String(raw) : "";
  }

  function setSession(username) {
    localStorage.setItem(SESSION_KEY, String(username));
  }

  function clearSession() {
    localStorage.removeItem(SESSION_KEY);
  }

  function showError(el, message) {
    if (!el) return;
    el.textContent = message || "";
    el.hidden = !message;
  }

  function setPanelActive({ tabLogin, tabRegister, panelLogin, panelRegister }, mode) {
    const isLogin = mode === "login";
    if (tabLogin) {
      tabLogin.classList.toggle("auth-tab--active", isLogin);
      tabLogin.setAttribute("aria-selected", String(isLogin));
    }
    if (tabRegister) {
      tabRegister.classList.toggle("auth-tab--active", !isLogin);
      tabRegister.setAttribute("aria-selected", String(!isLogin));
    }
    if (panelLogin) panelLogin.hidden = !isLogin;
    if (panelRegister) panelRegister.hidden = isLogin;
  }

  function onAuthSuccess(username) {
    const authGate = document.getElementById("auth-gate");
    const appRoot = document.getElementById("app-root");
    const nextBtn = document.getElementById("boton");

    if (authGate) authGate.hidden = true;
    if (appRoot) appRoot.hidden = false;
    if (nextBtn) nextBtn.hidden = false;

    document.dispatchEvent(new Event("cinemazone-auth-ready"));
  }

  function init() {
    const tabLogin = document.getElementById("tab-login");
    const tabRegister = document.getElementById("tab-register");
    const panelLogin = document.getElementById("panel-login");
    const panelRegister = document.getElementById("panel-register");

    const formLogin = document.getElementById("form-login");
    const formRegister = document.getElementById("form-register");

    const loginUser = document.getElementById("login-username");
    const loginPass = document.getElementById("login-password");
    const registerUser = document.getElementById("register-username");
    const registerPass = document.getElementById("register-password");

    const errLogin = document.getElementById("auth-error-login");
    const errRegister = document.getElementById("auth-error-register");

    const btnLogout = document.getElementById("btn-logout");
    const authGate = document.getElementById("auth-gate");
    const appRoot = document.getElementById("app-root");
    const nextBtn = document.getElementById("boton");

    const ui = { tabLogin, tabRegister, panelLogin, panelRegister };

    if (tabLogin) {
      tabLogin.addEventListener("click", () => {
        showError(errLogin, "");
        showError(errRegister, "");
        setPanelActive(ui, "login");
      });
    }
    if (tabRegister) {
      tabRegister.addEventListener("click", () => {
        showError(errLogin, "");
        showError(errRegister, "");
        setPanelActive(ui, "register");
      });
    }

    const current = getSession();
    if (current) {
      if (authGate) authGate.hidden = true;
      if (appRoot) appRoot.hidden = false;
      if (nextBtn) nextBtn.hidden = false;
      document.dispatchEvent(new Event("cinemazone-auth-ready"));
    } else {
      if (authGate) authGate.hidden = false;
      if (appRoot) appRoot.hidden = true;
      if (nextBtn) nextBtn.hidden = true;
      setPanelActive(ui, "login");
    }

    if (formLogin) {
      formLogin.addEventListener("submit", (e) => {
        e.preventDefault();
        showError(errLogin, "");

        const username = loginUser?.value?.trim() || "";
        const password = loginPass?.value || "";

        if (username.length < 2) {
          showError(errLogin, "Inserisci un nome utente valido (min. 2 caratteri).");
          return;
        }
        if (password.length < 4) {
          showError(errLogin, "Inserisci una password valida (min. 4 caratteri).");
          return;
        }

        const users = loadUsers();
        if (!users[username] || users[username] !== password) {
          showError(errLogin, "Credenziali non valide. Se non hai un account, registrati.");
          return;
        }

        setSession(username);
        onAuthSuccess(username);
      });
    }

    if (formRegister) {
      formRegister.addEventListener("submit", (e) => {
        e.preventDefault();
        showError(errRegister, "");

        const username = registerUser?.value?.trim() || "";
        const password = registerPass?.value || "";

        if (username.length < 2) {
          showError(errRegister, "Inserisci un nome utente valido (min. 2 caratteri).");
          return;
        }
        if (password.length < 4) {
          showError(errRegister, "La password deve avere almeno 4 caratteri.");
          return;
        }

        const users = loadUsers();
        if (users[username]) {
          showError(errRegister, "Questo nome utente esiste già. Prova ad accedere.");
          return;
        }

        users[username] = password;
        saveUsers(users);
        setSession(username);
        onAuthSuccess(username);
      });
    }

    if (btnLogout) {
      btnLogout.addEventListener("click", () => {
        clearSession();
        showError(errLogin, "");
        showError(errRegister, "");
        if (authGate) authGate.hidden = false;
        if (appRoot) appRoot.hidden = true;
        if (nextBtn) nextBtn.hidden = true;
        setPanelActive(ui, "login");
      });
    }
  }

  window.CinemaZoneAuth = {
    getSession,
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();

