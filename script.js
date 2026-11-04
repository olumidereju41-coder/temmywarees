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

  { name: 'Gold Pocket Chain', category: 'Chains', price: '₦7,000', image: './images/chain/IMG-20261102-WA0009.jpg', inStock: true },
  { name: 'Silver Pocket Chain', category: 'Chains', price: '₦7,000', image: './images/chain/IMG-20261102-WA0010.jpg', inStock: true },
  { name: 'Royal Link Chain', category: 'Chains', price: '₦7,000', image: './images/chain/IMG-20261102-WA0011.jpg', inStock: true },
  { name: 'Diamond Pocket Piece', category: 'Chains', price: '₦7,000', image: './images/chain/IMG-20261102-WA0012.jpg', inStock: true },
  { name: 'Executive Chain', category: 'Chains', price: '₦7,000', image: './images/chain/IMG-20261102-WA0013.jpg', inStock: true },

  { name: 'Cuban Wrist Chain', category: 'Chains', price: '₦7,000', image: './images/wrist chain/IMG-20261102-WA0014.jpg', inStock: true },
  { name: 'Gold Wrist Link', category: 'Chains', price: '₦7,000', image: './images/wrist chain/IMG-20261102-WA0021.jpg', inStock: true },
  { name: 'Charm Wristwear', category: 'Chains', price: '₦7,000', image: './images/neck chain/IMG-20261102-WA0015.jpg', inStock: true },
  { name: 'Luxe Wrist Set', category: 'Chains', price: '₦7,000', image: './images/neck chain/IMG-20261102-WA0017.jpg', inStock: true },
  { name: 'Statement Wrist Chain', category: 'Chains', price: '₦7,000', image: './images/neck chain/IMG-20261102-WA0027.jpg', inStock: true },

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

  { name: 'Pearl Drop Earring', category: 'Chains', price: '₦7,000', image: './images/chain/IMG-20261102-WA0016.jpg', inStock: true },
  { name: 'Emerald Ring', category: 'Chains', price: '₦7,000', image: './images/chain/IMG-20261102-WA0018.jpg', inStock: true },
  { name: 'Twilight Necklace', category: 'Chains', price: '₦7,000', image: './images/chain/IMG-20261102-WA0023.jpg', inStock: true },
  { name: 'Bridal Bracelet', category: 'Chains', price: '₦7,000', image: './images/chain/IMG-20261102-WA0009.jpg', inStock: true },
  { name: 'Curved Gold Cuff', category: 'Chains', price: '₦7,000', image: './images/neck chain/IMG-20261102-WA0015.jpg', inStock: true },

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
const searchInput = document.getElementById('productSearch');
const searchForm = document.getElementById('searchForm');
const navToggle = document.querySelector('.nav-toggle');
const navPanel = document.getElementById('navPanel');
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItemsContainer = document.getElementById('cartItems');
const cartPageItems = document.getElementById('cartPageItems');
const cartTotal = document.getElementById('cartTotal');
const summaryTotal = document.getElementById('summaryTotal');
const summaryItemCount = document.getElementById('summaryItemCount');
const cartCount = document.getElementById('cartCount');
const miniCartBadge = document.getElementById('miniCartBadge');
const checkoutLink = document.getElementById('checkoutLink');
const pageCheckoutLink = document.getElementById('pageCheckoutLink');
const floatingCartBtn = document.getElementById('floatingCartBtn');
const navCartBtn = document.getElementById('navCartBtn');
const ownerPanelBtn = document.getElementById('ownerPanelBtn');
const ownerPanel = document.getElementById('ownerPanel');
const ownerOverlay = document.getElementById('ownerOverlay');
const closeOwnerPanelBtn = document.getElementById('closeOwnerPanelBtn');
const ownerPanelBody = document.getElementById('ownerPanelBody');
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
let activeCategory = 'All';
const CART_KEY = 'temmyWearsCart';
const COMMENTS_KEY = 'temmyWearsComments';
const OWNER_PASSWORD = 'temmy123';

function getNumericPrice(priceText) {
  return Number(String(priceText).replace(/[^\d]/g, '')) || 0;
}

function loadCart() {
  try {
    const storedCart = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
    return Array.isArray(storedCart) ? storedCart : [];
  } catch (error) {
    return [];
  }
}

function saveCart(cartItems) {
  localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
}

function getCartSummary() {
  const cartItems = loadCart();
  const totalItems = cartItems.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + getNumericPrice(item.price) * (Number(item.quantity) || 0), 0);

  return { totalItems, totalPrice };
}

function updateCartBadge() {
  const { totalItems } = getCartSummary();

  if (cartCount) {
    cartCount.textContent = totalItems;
  }

  if (miniCartBadge) {
    miniCartBadge.textContent = totalItems;
  }
}

function buildCheckoutMessage() {
  const cartItems = loadCart();

  if (!cartItems.length) {
    return 'Hello Temmy Wears, I want to checkout my cart.';
  }

  const itemSummary = cartItems
    .map((item) => `${item.name} (${item.quantity})`)
    .join(', ');
  const { totalPrice } = getCartSummary();

  return `Hello Temmy Wears, I want to order: ${itemSummary}. Total: ₦${totalPrice.toLocaleString('en-NG')}.`;
}

function renderCartItems() {
  const cartItems = loadCart();
  const totalPrice = getCartSummary().totalPrice;

  if (!cartItemsContainer || !cartPageItems || !cartTotal || !summaryTotal || !summaryItemCount) {
    return;
  }

  if (!cartItems.length) {
    cartItemsContainer.innerHTML = '<div class="cart-empty">Your cart is empty. Add a product from the collection.</div>';
    cartPageItems.innerHTML = '<div class="cart-empty">Your cart is empty. Add a product from the collection.</div>';
    cartTotal.textContent = '₦0';
    summaryTotal.textContent = '₦0';
    summaryItemCount.textContent = '0';
    updateCartBadge();
    return;
  }

  cartItemsContainer.innerHTML = cartItems
    .map((item) => `
      <article class="cart-item">
        <div class="cart-item-image">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
        </div>
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <div class="cart-item-meta">
            <span class="cart-item-price">${item.price}</span>
            <span>Qty: ${item.quantity}</span>
          </div>
        </div>
        <button class="cart-item-remove" type="button" data-remove-name="${item.name}">Remove</button>
      </article>
    `)
    .join('');

  cartPageItems.innerHTML = cartItems
    .map((item) => `
      <article class="cart-item">
        <div class="cart-item-image">
          <img src="${item.image}" alt="${item.name}" loading="lazy" />
        </div>
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <div class="cart-item-meta">
            <span class="cart-item-price">${item.price}</span>
            <span>Qty: ${item.quantity}</span>
          </div>
        </div>
        <button class="cart-item-remove" type="button" data-remove-name="${item.name}">Remove</button>
      </article>
    `)
    .join('');

  const itemCount = cartItems.reduce((sum, item) => sum + (Number(item.quantity) || 0), 0);
  cartTotal.textContent = `₦${totalPrice.toLocaleString('en-NG')}`;
  summaryTotal.textContent = `₦${totalPrice.toLocaleString('en-NG')}`;
  summaryItemCount.textContent = itemCount;
  updateCartBadge();

  if (checkoutLink) {
    checkoutLink.href = `https://wa.me/2348064349486?text=${encodeURIComponent(buildCheckoutMessage())}`;
  }

  if (pageCheckoutLink) {
    pageCheckoutLink.href = `https://wa.me/2348064349486?text=${encodeURIComponent(buildCheckoutMessage())}`;
  }
}

function openCartDrawer() {
  if (!cartDrawer || !cartOverlay) {
    return;
  }

  cartDrawer.classList.add('is-open');
  cartOverlay.classList.add('is-visible');
}

function closeCartDrawer() {
  if (!cartDrawer || !cartOverlay) {
    return;
  }

  cartDrawer.classList.remove('is-open');
  cartOverlay.classList.remove('is-visible');
}

function addToCart(productName) {
  const product = products.find((item) => item.name === productName);

  if (!product) {
    showAuthPopup('Unavailable product');
    return;
  }

  const cartItems = loadCart();
  const existingItem = cartItems.find((item) => item.name === product.name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      quantity: 1
    });
  }

  saveCart(cartItems);
  renderCartItems();
  document.getElementById('cartPage')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  openCartDrawer();
  showAuthPopup(`${product.name} added to cart`);
}

function removeFromCart(productName) {
  const cartItems = loadCart().filter((item) => item.name !== productName);
  saveCart(cartItems);
  renderCartItems();
}

function getProductComments(productName) {
  try {
    const storedComments = JSON.parse(localStorage.getItem(COMMENTS_KEY) || '{}');
    const comments = Array.isArray(storedComments[productName]) ? storedComments[productName] : [];
    return comments
      .map((commentItem) => ({
        text: String(commentItem?.text || '').trim(),
        date: commentItem?.date || new Date().toISOString(),
        id: commentItem?.id || commentItem?.date || `${Date.now()}-${Math.random().toString(16).slice(2)}`
      }))
      .filter((commentItem) => commentItem.text)
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (error) {
    return [];
  }
}

function getAllComments() {
  try {
    const storedComments = JSON.parse(localStorage.getItem(COMMENTS_KEY) || '{}');
    const productNames = Object.keys(storedComments);

    return productNames.flatMap((productName) => {
      const comments = Array.isArray(storedComments[productName]) ? storedComments[productName] : [];
      return comments
        .map((commentItem) => ({
          id: commentItem?.id || commentItem?.date || `${Date.now()}-${Math.random().toString(16).slice(2)}`,
          product: productName,
          text: String(commentItem?.text || '').trim(),
          date: commentItem?.date || new Date().toISOString()
        }))
        .filter((commentItem) => commentItem.text)
        .sort((a, b) => new Date(b.date) - new Date(a.date));
    });
  } catch (error) {
    return [];
  }
}

async function syncCommentsFromServer() {
  try {
    const response = await fetch('/api/comments');
    if (!response.ok) {
      return;
    }

    const payload = await response.json();
    const normalizedComments = {};

    (payload.comments || []).forEach((commentItem) => {
      const productName = commentItem.product;
      if (!productName) {
        return;
      }

      if (!normalizedComments[productName]) {
        normalizedComments[productName] = [];
      }

      normalizedComments[productName].push({
        id: commentItem.id,
        text: commentItem.text,
        date: commentItem.date
      });
    });

    localStorage.setItem(COMMENTS_KEY, JSON.stringify(normalizedComments));
  } catch (error) {
    // Ignore sync failures and keep local comments as fallback.
  }
}

async function fetchProductComments(productName) {
  try {
    const response = await fetch(`/api/comments?product=${encodeURIComponent(productName)}`);
    if (!response.ok) {
      return getProductComments(productName);
    }

    const payload = await response.json();
    const comments = payload.comments || [];
    const normalizedComments = comments.map((commentItem) => ({
      id: commentItem.id,
      text: String(commentItem.text || '').trim(),
      date: commentItem.date || new Date().toISOString()
    })).filter((commentItem) => commentItem.text);

    const localData = JSON.parse(localStorage.getItem(COMMENTS_KEY) || '{}');
    localData[productName] = normalizedComments;
    localStorage.setItem(COMMENTS_KEY, JSON.stringify(localData));
    return normalizedComments;
  } catch (error) {
    return getProductComments(productName);
  }
}

async function saveCommentToServer(productName, text) {
  try {
    const response = await fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ product: productName, text })
    });

    if (!response.ok) {
      throw new Error('Comment save failed');
    }

    const payload = await response.json();
    const currentComments = getProductComments(productName);
    const mergedComments = [payload.comment, ...currentComments].filter(Boolean);
    const localData = JSON.parse(localStorage.getItem(COMMENTS_KEY) || '{}');
    localData[productName] = mergedComments;
    localStorage.setItem(COMMENTS_KEY, JSON.stringify(localData));
    return payload.comment;
  } catch (error) {
    const savedComments = JSON.parse(localStorage.getItem(COMMENTS_KEY) || '{}');
    const productComments = Array.isArray(savedComments[productName]) ? savedComments[productName] : [];
    const newComment = {
      id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
      text,
      date: new Date().toISOString()
    };
    productComments.push(newComment);
    savedComments[productName] = productComments;
    localStorage.setItem(COMMENTS_KEY, JSON.stringify(savedComments));
    return newComment;
  }
}

function openOwnerPanel() {
  if (!ownerPanel || !ownerOverlay) {
    return;
  }

  const password = window.prompt('Enter owner password to access comments dashboard:', '');
  if (password === null) {
    return;
  }

  if (password !== OWNER_PASSWORD) {
    showAuthPopup('Incorrect owner password');
    return;
  }

  renderOwnerPanel();
  ownerPanel.classList.add('is-open');
  ownerOverlay.classList.add('is-visible');
}

function closeOwnerPanel() {
  if (!ownerPanel || !ownerOverlay) {
    return;
  }

  ownerPanel.classList.remove('is-open');
  ownerOverlay.classList.remove('is-visible');
}

async function deleteComment(productName, commentDate) {
  const password = OWNER_PASSWORD;

  try {
    const response = await fetch(`/api/comments/${encodeURIComponent(productName)}/${encodeURIComponent(commentDate)}?ownerPassword=${encodeURIComponent(password)}`, {
      method: 'DELETE'
    });

    if (!response.ok) {
      throw new Error('Delete failed');
    }

    const storedComments = JSON.parse(localStorage.getItem(COMMENTS_KEY) || '{}');
    const productComments = Array.isArray(storedComments[productName]) ? storedComments[productName] : [];
    const nextComments = productComments.filter((commentItem) => String(commentItem?.date || commentItem?.id) !== String(commentDate));

    if (nextComments.length) {
      storedComments[productName] = nextComments;
    } else {
      delete storedComments[productName];
    }

    localStorage.setItem(COMMENTS_KEY, JSON.stringify(storedComments));
    await renderOwnerPanel();
    renderProducts(activeCategory, searchInput ? searchInput.value : '');
  } catch (error) {
    showAuthPopup('Unable to delete comment');
  }
}

async function renderOwnerPanel() {
  if (!ownerPanelBody) {
    return;
  }

  try {
    const response = await fetch(`/api/comments/all?ownerPassword=${encodeURIComponent(OWNER_PASSWORD)}`);
    if (!response.ok) {
      throw new Error('Unauthorized');
    }

    const payload = await response.json();
    const allComments = payload.comments || [];

    if (!allComments.length) {
      ownerPanelBody.innerHTML = '<div class="owner-empty">No comments have been left yet.</div>';
      return;
    }

    ownerPanelBody.innerHTML = allComments
      .map(
        (commentItem) => `
          <div class="owner-comment-card">
            <div class="owner-comment-header">
              <span>${commentItem.product}</span>
              <button type="button" class="owner-delete-btn" data-product-name="${commentItem.product}" data-comment-date="${commentItem.date}">Delete</button>
            </div>
            <p>${commentItem.text}</p>
            <small>${new Date(commentItem.date).toLocaleString([], {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</small>
          </div>
        `
      )
      .join('');
  } catch (error) {
    const allComments = getAllComments();
    if (!allComments.length) {
      ownerPanelBody.innerHTML = '<div class="owner-empty">No comments have been left yet.</div>';
      return;
    }

    ownerPanelBody.innerHTML = allComments
      .map(
        (commentItem) => `
          <div class="owner-comment-card">
            <div class="owner-comment-header">
              <span>${commentItem.product}</span>
              <button type="button" class="owner-delete-btn" data-product-name="${commentItem.product}" data-comment-date="${commentItem.date}">Delete</button>
            </div>
            <p>${commentItem.text}</p>
            <small>${new Date(commentItem.date).toLocaleString([], {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })}</small>
          </div>
        `
      )
      .join('');
  }
}

function renderCommentList(productName, comments = getProductComments(productName)) {
  const latestComment = comments[0];
  const previewText = latestComment ? latestComment.text : 'No comments yet for this product.';
  const previewExcerpt = previewText.length > 60 ? `${previewText.slice(0, 60)}...` : previewText;

  if (!comments.length) {
    return `
      <div class="comment-list collapsed">
        <div class="comment-preview">No comments yet for this product.</div>
        <button type="button" class="view-comments-btn" data-view-product="${productName}">View comments</button>
      </div>
    `;
  }

  return `
    <div class="comment-list collapsed">
      <div class="comment-preview">${previewExcerpt}</div>
      <button type="button" class="view-comments-btn" data-view-product="${productName}">View comments</button>
      <div class="comment-list-items" hidden>
        ${comments
          .map(
            (commentItem) => `
              <div class="comment-item">
                <div class="comment-user-row">
                  <span class="comment-user">Customer</span>
                  <span class="comment-date">${new Date(commentItem.date).toLocaleString([], {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}</span>
                </div>
                <p>${commentItem.text}</p>
              </div>
            `
          )
          .join('')}
      </div>
    </div>
  `;
}

async function renderProducts(category = 'All', searchTerm = '') {
  if (!productGrid) {
    return;
  }

  activeCategory = category;
  const normalizedSearch = searchTerm.trim().toLowerCase();

  const filteredProducts = products.filter((product) => {
    const matchesCategory = category === 'All' || product.category === category;
    const matchesSearch = !normalizedSearch
      || product.name.toLowerCase().includes(normalizedSearch)
      || product.category.toLowerCase().includes(normalizedSearch);

    return matchesCategory && matchesSearch;
  });

  productGrid.innerHTML = filteredProducts
    .map(
      (product) => `
        <article class="product-card" data-product-name="${product.name}">
          <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy" />
            ${product.inStock === false ? '<span class="stock-badge">Out of stock</span>' : ''}
          </div>
          <div class="product-meta">
            <span class="product-category">${product.category}</span>
            <h3>${product.name}</h3>
            <div class="product-footer">
              <span class="price">${product.price}</span>
              ${product.inStock === false
                ? '<span class="stock-label">Unavailable</span>'
                : `<button class="buy-link" type="button" data-buy-product="${product.name}">Buy now</button>`}
            </div>
            <div class="comment-bar" data-product-name="${product.name}">
              <div class="comment-avatars">
                <span>👤</span>
                <span>✨</span>
              </div>
              <button type="button" class="comment-trigger" data-comment-product="${product.name}">Comment</button>
            </div>
            <div data-comment-slot="${product.name}" class="comment-slot"></div>
          </div>
        </article>
      `
    )
    .join('');

  const commentSlots = productGrid.querySelectorAll('[data-comment-slot]');
  for (const slot of commentSlots) {
    const productName = slot.dataset.commentSlot;
    const comments = await fetchProductComments(productName);
    slot.innerHTML = renderCommentList(productName, comments);
  }
}

function findProductByName(searchTerm) {
  const query = searchTerm.trim().toLowerCase();

  if (!query) {
    return null;
  }

  return products.find((product) => {
    const productName = product.name.toLowerCase();
    const productCategory = product.category.toLowerCase();

    return productName === query
      || productName.includes(query)
      || productCategory.includes(query);
  }) || null;
}

function jumpToProduct(productName) {
  const targetCard = Array.from(productGrid?.querySelectorAll('.product-card') || []).find(
    (card) => card.dataset.productName === productName
  );

  if (!targetCard) {
    return;
  }

  targetCard.classList.add('is-highlighted');
  targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });

  setTimeout(() => {
    targetCard.classList.remove('is-highlighted');
  }, 1800);
}

function setMode(mode) {
  authMode = mode;
  modeButtons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.mode === mode);
  });

  const isSignUp = mode === 'signup';

  if (loginField) {
    loginField.classList.toggle('hidden', !isSignUp);
  }

  const submitButton = document.querySelector('.auth-submit');
  if (submitButton) {
    submitButton.textContent = isSignUp ? 'Create account' : 'Login';
  }

  if (fullNameInput) {
    if (isSignUp) {
      fullNameInput.setAttribute('required', 'required');
    } else {
      fullNameInput.removeAttribute('required');
    }
  }
}

function setAuthMessage(message, isError = false) {
  if (!authMessage) {
    return;
  }

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
  if (authScreen) {
    authScreen.remove();
  }

  if (appShell) {
    appShell.classList.remove('hidden');
  }

  if (welcomeName) {
    welcomeName.textContent = 'there';
  }
}

modeButtons.forEach((button) => {
  button.addEventListener('click', () => setMode(button.dataset.mode));
});

function showAuthPopup(message) {
  if (!authMessage) {
    return;
  }

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

if (authForm) {
  authForm.addEventListener('submit', (event) => {
    event.preventDefault();
    showAuthPopup('Authentication has been removed for this storefront.');
  });
}

if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    clearActiveUser();
    if (authForm) {
      authForm.reset();
    }
    setAuthMessage('');
    applyAuthState();
  });
}

filters.forEach((filterButton) => {
  filterButton.addEventListener('click', () => {
    filters.forEach((button) => button.classList.toggle('active', button === filterButton));
    renderProducts(filterButton.textContent.trim(), searchInput ? searchInput.value : '');
  });
});

if (searchInput) {
  searchInput.addEventListener('input', (event) => {
    renderProducts(activeCategory, event.target.value);
  });
}

if (searchForm && searchInput) {
  searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const query = searchInput.value.trim();
    const matchingProduct = findProductByName(query);

    if (!matchingProduct) {
      showAuthPopup('Unavailable product');
      return;
    }

    searchInput.value = matchingProduct.name;
    renderProducts(matchingProduct.category, matchingProduct.name);
    jumpToProduct(matchingProduct.name);
    document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

if (productGrid) {
  productGrid.addEventListener('click', (event) => {
    const buyButton = event.target.closest('[data-buy-product]');
    if (buyButton) {
      addToCart(buyButton.dataset.buyProduct);
      return;
    }

    const commentButton = event.target.closest('[data-comment-product]');
    if (commentButton) {
      const productName = commentButton.dataset.commentProduct;
      const product = products.find((item) => item.name === productName);

      if (!product) {
        showAuthPopup('Unavailable product');
        return;
      }

      const comment = window.prompt(`Leave a comment about ${product.name}:`, '');
      if (comment === null) {
        return;
      }

      const trimmedComment = comment.trim();
      if (!trimmedComment) {
        showAuthPopup('Comment cannot be empty');
        return;
      }

      try {
        await saveCommentToServer(product.name, trimmedComment);
      } catch (error) {
        const savedComments = JSON.parse(localStorage.getItem(COMMENTS_KEY) || '{}');
        const productComments = Array.isArray(savedComments[product.name]) ? savedComments[product.name] : [];
        productComments.push({
          text: trimmedComment,
          date: new Date().toISOString()
        });
        savedComments[product.name] = productComments;
        localStorage.setItem(COMMENTS_KEY, JSON.stringify(savedComments));
      }

      renderProducts(activeCategory, searchInput ? searchInput.value : '');
      showAuthPopup('Comment added successfully');
    }

    const viewCommentsButton = event.target.closest('[data-view-product]');
    if (viewCommentsButton) {
      const productName = viewCommentsButton.dataset.viewProduct;
      const commentList = viewCommentsButton.closest('.comment-list');
      const commentItems = commentList?.querySelector('.comment-list-items');

      if (!commentList || !commentItems) {
        return;
      }

      const isHidden = commentItems.hasAttribute('hidden');
      commentItems.toggleAttribute('hidden', !isHidden);
      viewCommentsButton.textContent = isHidden ? 'Hide comments' : 'View comments';
      commentList.classList.toggle('expanded', isHidden);
    }
  });
}

if (ownerPanelBody) {
  ownerPanelBody.addEventListener('click', (event) => {
    const deleteButton = event.target.closest('[data-comment-date]');
    if (!deleteButton) {
      return;
    }

    deleteComment(deleteButton.dataset.productName, deleteButton.dataset.commentDate);
  });
}

if (cartItemsContainer) {
  cartItemsContainer.addEventListener('click', (event) => {
    const removeButton = event.target.closest('[data-remove-name]');
    if (!removeButton) {
      return;
    }

    removeFromCart(removeButton.dataset.removeName);
  });
}

if (cartPageItems) {
  cartPageItems.addEventListener('click', (event) => {
    const removeButton = event.target.closest('[data-remove-name]');
    if (!removeButton) {
      return;
    }

    removeFromCart(removeButton.dataset.removeName);
  });
}

if (floatingCartBtn) {
  floatingCartBtn.addEventListener('click', () => {
    openCartDrawer();
    document.getElementById('cartPage')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

if (navCartBtn) {
  navCartBtn.addEventListener('click', () => {
    openCartDrawer();
    document.getElementById('cartPage')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

if (ownerPanelBtn) {
  ownerPanelBtn.addEventListener('click', openOwnerPanel);
}

if (closeOwnerPanelBtn) {
  closeOwnerPanelBtn.addEventListener('click', closeOwnerPanel);
}

if (ownerOverlay) {
  ownerOverlay.addEventListener('click', closeOwnerPanel);
}

if (closeCartBtn) {
  closeCartBtn.addEventListener('click', closeCartDrawer);
}

if (cartOverlay) {
  cartOverlay.addEventListener('click', closeCartDrawer);
}

if (navToggle && navPanel) {
  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!isExpanded));
    navPanel.classList.toggle('is-open', !isExpanded);
  });

  navPanel.querySelectorAll('.nav-link, .secondary-link, .whatsapp-button').forEach((link) => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navPanel.classList.remove('is-open');
    });
  });
}

renderProducts();
renderCartItems();
setMode('login');
applyAuthState();
