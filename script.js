const products = [
  { name: 'Royal Smart Watch', category: 'Smart Watches', price: '₦58,500', image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80' },
  { name: 'Urban Pulse Watch', category: 'Smart Watches', price: '₦64,000', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80' },
  { name: 'Classic Time Pro', category: 'Smart Watches', price: '₦49,900', image: 'https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?auto=format&fit=crop&w=900&q=80' },
  { name: 'Elite Sport Watch', category: 'Smart Watches', price: '₦71,200', image: 'https://images.unsplash.com/photo-1508057198894-247b23fe5ade?auto=format&fit=crop&w=900&q=80' },
  { name: 'Signature Watch', category: 'Smart Watches', price: '₦83,500', image: 'https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?auto=format&fit=crop&w=900&q=80' },

  { name: 'AirPods Max Luxe', category: 'AirPods', price: '₦118,000', image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=900&q=80' },
  { name: 'Studio Wireless Pods', category: 'AirPods', price: '₦88,000', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80' },
  { name: 'Zen Earbuds', category: 'AirPods', price: '₦76,500', image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=900&q=80' },
  { name: 'Pulse Audio Pods', category: 'AirPods', price: '₦92,400', image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=900&q=80' },
  { name: 'NightDrive Pods', category: 'AirPods', price: '₦99,000', image: 'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=900&q=80' },

  { name: 'Gold Pocket Chain', category: 'Jewellery', price: '₦18,800', image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80' },
  { name: 'Silver Pocket Chain', category: 'Jewellery', price: '₦16,200', image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80' },
  { name: 'Royal Link Chain', category: 'Jewellery', price: '₦21,500', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80' },
  { name: 'Diamond Pocket Piece', category: 'Jewellery', price: '₦28,800', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=80' },
  { name: 'Executive Chain', category: 'Jewellery', price: '₦26,400', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80' },

  { name: 'Cuban Wrist Chain', category: 'Jewellery', price: '₦22,000', image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80' },
  { name: 'Gold Wrist Link', category: 'Jewellery', price: '₦19,900', image: 'https://images.unsplash.com/photo-1601821765780-754fa98637c1?auto=format&fit=crop&w=900&q=80' },
  { name: 'Charm Wristwear', category: 'Jewellery', price: '₦24,700', image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80' },
  { name: 'Luxe Wrist Set', category: 'Jewellery', price: '₦31,600', image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80' },
  { name: 'Statement Wrist Chain', category: 'Jewellery', price: '₦27,800', image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80' },

  { name: 'Arrow Trousers', category: 'Wears', price: '₦20,500', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80' },
  { name: 'Slim Tailored Trousers', category: 'Wears', price: '₦24,800', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80' },
  { name: 'Metro Formal Trouser', category: 'Wears', price: '₦22,900', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80' },
  { name: 'Chic Linen Trousers', category: 'Wears', price: '₦19,700', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80' },
  { name: 'Executive Classic Trouser', category: 'Wears', price: '₦26,500', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80' },

  { name: 'Executive Suit Set', category: 'Wears', price: '₦65,000', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80' },
  { name: 'Power Blazer', category: 'Wears', price: '₦43,200', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80' },
  { name: 'Crest Corporate Shirt', category: 'Wears', price: '₦28,300', image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80' },
  { name: 'Signature Office Set', category: 'Wears', price: '₦54,700', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80' },
  { name: 'Boardroom Collection', category: 'Wears', price: '₦61,000', image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80' },

  { name: 'Pearl Drop Earring', category: 'Jewellery', price: '₦15,600', image: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=900&q=80' },
  { name: 'Emerald Ring', category: 'Jewellery', price: '₦13,900', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=80' },
  { name: 'Twilight Necklace', category: 'Jewellery', price: '₦18,200', image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=80' },
  { name: 'Bridal Bracelet', category: 'Jewellery', price: '₦16,500', image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=900&q=80' },
  { name: 'Curved Gold Cuff', category: 'Jewellery', price: '₦20,300', image: 'https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?auto=format&fit=crop&w=900&q=80' },

  { name: 'Luxury Sunglasses', category: 'Accessories', price: '₦14,800', image: 'https://images.unsplash.com/photo-1577803947579-9f5d0c7f0d9b?auto=format&fit=crop&w=900&q=80' },
  { name: 'Leather Wallet', category: 'Accessories', price: '₦12,500', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=80' },
  { name: 'City Crossbody Bag', category: 'Accessories', price: '₦18,000', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80' },
  { name: 'Signature Cap', category: 'Accessories', price: '₦9,300', image: 'https://images.unsplash.com/photo-1521369909026-d1aa2f3c6dbd?auto=format&fit=crop&w=900&q=80' },
  { name: 'Premium Perfume Set', category: 'Accessories', price: '₦17,600', image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=80' }
];

const STORAGE_KEY = 'temmyWearsAuth';
const USERS_KEY = 'temmyWearsUsers';
const DISPOSABLE_EMAIL_DOMAINS = new Set([
  'mailinator.com',
  '10minutemail.com',
  'guerrillamail.com',
  'tempmail.com',
  'trashmail.com',
  'yopmail.com',
  'sharklasers.com',
  'dispostable.com',
  'fakeinbox.com',
  'getnada.com'
]);

function loadUsers() {
  try {
    const storedUsers = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    const users = Array.isArray(storedUsers) ? storedUsers : [];
    const legacyUser = getActiveUser();

    if (legacyUser && legacyUser.email && !users.some((user) => user.email === legacyUser.email)) {
      users.push(legacyUser);
      saveUsers(users);
    }

    return users;
  } catch (error) {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function getActiveUser() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
  } catch (error) {
    return null;
  }
}

function setActiveUser(user) {
  if (user && user.email) {
    const users = loadUsers();
    const existingIndex = users.findIndex((entry) => entry.email === user.email);

    if (existingIndex >= 0) {
      users[existingIndex] = { ...users[existingIndex], ...user };
    } else {
      users.push(user);
    }

    saveUsers(users);
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
}

function clearActiveUser() {
  localStorage.removeItem(STORAGE_KEY);
}

function validateEmailAddress(rawEmail) {
  const email = (rawEmail || '').trim().toLowerCase();

  if (!email) {
    return { valid: false, message: 'Please provide an email address.' };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!emailPattern.test(email)) {
    return { valid: false, message: 'Please enter a valid email address.' };
  }

  const domain = email.split('@')[1];
  if (!domain || domain.startsWith('.') || domain.endsWith('.') || domain.includes('..')) {
    return { valid: false, message: 'Please use a valid email domain.' };
  }

  const rootDomain = domain.split('.').slice(-2).join('.');
  if (DISPOSABLE_EMAIL_DOMAINS.has(domain) || DISPOSABLE_EMAIL_DOMAINS.has(rootDomain)) {
    return { valid: false, message: 'Temporary or disposable email addresses are not allowed.' };
  }

  return { valid: true, normalizedEmail: email };
}

const productGrid = document.getElementById('productGrid');
const filters = document.querySelectorAll('.filter');
const authScreen = document.getElementById('authScreen');
const appShell = document.getElementById('appShell');
const authForm = document.getElementById('authForm');
const authMessage = document.getElementById('authMessage');
const modeButtons = document.querySelectorAll('.mode-btn');
const loginField = document.getElementById('nameField');
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const logoutBtn = document.getElementById('logoutBtn');
const welcomeName = document.getElementById('welcomeName');
let authMode = 'login';

function renderProducts(category = 'All') {
  if (!productGrid) {
    return;
  }

  const filteredProducts = category === 'All'
    ? products
    : products.filter((product) => product.category === category);

  productGrid.innerHTML = filteredProducts
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
          </div>
          <div class="product-meta">
            <span class="product-category">${product.category}</span>
            <h3>${product.name}</h3>
            <div class="product-footer">
              <span class="price">${product.price}</span>
              <a class="buy-link" href="https://wa.me/2348064349486?text=${encodeURIComponent(`Hello Temmy Wears, I want to order the ${product.name}.`) }" target="_blank" rel="noopener noreferrer">Buy now</a>
            </div>
          </div>
        </article>
      `
    )
    .join('');
}

function setMode(mode) {
  authMode = mode;
  modeButtons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.mode === mode);
  });

  const isSignUp = mode === 'signup';
  loginField.classList.toggle('hidden', !isSignUp);
  const submitButton = document.querySelector('.auth-submit');
  submitButton.textContent = isSignUp ? 'Create account' : 'Login';

  if (isSignUp) {
    fullNameInput.setAttribute('required', 'required');
  } else {
    fullNameInput.removeAttribute('required');
  }
}

function setAuthMessage(message, isError = false) {
  authMessage.textContent = message;
  authMessage.classList.toggle('error', isError);
}

function updateWelcomeText() {
  try {
    const savedUser = getActiveUser();
    const firstName = savedUser?.name ? savedUser.name.split(' ')[0] : 'there';
    if (welcomeName) {
      welcomeName.textContent = firstName;
    }
  } catch (error) {
    if (welcomeName) {
      welcomeName.textContent = 'there';
    }
  }
}

function applyAuthState() {
  try {
    const savedUser = getActiveUser();
    const isLoggedIn = Boolean(savedUser && savedUser.email);

    if (authScreen) {
      authScreen.classList.toggle('hidden', isLoggedIn);
    }

    if (appShell) {
      appShell.classList.toggle('hidden', !isLoggedIn);
    }

    updateWelcomeText();
  } catch (error) {
    if (authScreen) {
      authScreen.classList.remove('hidden');
    }
    if (appShell) {
      appShell.classList.add('hidden');
    }
  }
}

modeButtons.forEach((button) => {
  button.addEventListener('click', () => setMode(button.dataset.mode));
});

function showAuthPopup(message) {
  setAuthMessage(message, true);
  const existing = document.querySelector('.auth-popup');
  if (existing) {
    existing.remove();
  }

  const popup = document.createElement('div');
  popup.className = 'auth-popup';
  popup.textContent = message;
  document.body.appendChild(popup);

  setTimeout(() => {
    popup.classList.add('visible');
  }, 10);

  setTimeout(() => {
    popup.classList.remove('visible');
    setTimeout(() => popup.remove(), 250);
  }, 1800);
}

authForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const fullName = fullNameInput.value.trim();
  const rawEmail = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!rawEmail || !password) {
    showAuthPopup('Please provide both email and password.');
    return;
  }

  if (authMode === 'signup' && !fullName) {
    showAuthPopup('Please enter your full name to create an account.');
    return;
  }

  const emailValidation = validateEmailAddress(rawEmail);
  if (!emailValidation.valid) {
    showAuthPopup(emailValidation.message, true);
    return;
  }

  const normalizedEmail = emailValidation.normalizedEmail;

  if (authMode === 'login') {
    const users = loadUsers();
    const savedUser = users.find((user) => user.email === normalizedEmail && user.password === password);

    if (!savedUser) {
      showAuthPopup('Incorrect email or password.');
      return;
    }

    if (!savedUser.emailVerified) {
      showAuthPopup('This email has not been verified yet. Please use a verified email address.', true);
      return;
    }

    setActiveUser(savedUser);
    setAuthMessage('Login successful.');
    setTimeout(() => {
      authForm.reset();
      setMode('login');
      applyAuthState();
    }, 400);
    return;
  }

  const users = loadUsers();
  const emailAlreadyExists = users.some((user) => user.email === normalizedEmail);

  if (emailAlreadyExists) {
    showAuthPopup('This email is already registered. Please log in instead.', true);
    setMode('login');
    return;
  }

  const user = {
    id: globalThis.crypto && crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    name: fullName,
    email: normalizedEmail,
    password,
    emailVerified: true,
    createdAt: new Date().toISOString()
  };

  users.push(user);
  saveUsers(users);
  setActiveUser(user);
  setAuthMessage('Account created successfully.');
  setTimeout(() => {
    authForm.reset();
    setMode('login');
    applyAuthState();
  }, 400);
});

if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    clearActiveUser();
    authForm.reset();
    setMode('login');
    setAuthMessage('');
    applyAuthState();
  });
}

filters.forEach((filterButton) => {
  filterButton.addEventListener('click', () => {
    filters.forEach((button) => button.classList.toggle('active', button === filterButton));
    renderProducts(filterButton.textContent.trim());
  });
});

renderProducts();
setMode('login');
applyAuthState();
