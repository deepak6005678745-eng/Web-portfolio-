// 1. Welcome Screen se Main Lobby par jaane ka logic
function goToLobby() {
  document.getElementById('welcome-screen').classList.add('hidden');
  document.getElementById('lobby-screen').classList.remove('hidden');
}

// 2. Heavy Details aur Images ka Data Store
const projectDetails = {
  tech: {
    title: "Enterprise Web & Mobile Ecosystem",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600",
    desc: "Ye project ek complete full-stack web aur mobile solutions suite hai. Isme modern frontend frameworks aur scalable UI architecture ka use karke fast-loading web applications design ki gayi hain. Key Highlights: Clean modular HTML/CSS/JS structure, mobile-first responsive grid system, dark-mode futuristic theme, ultra-fast asset loading, aur seamless multi-interface transitions without dynamic page reloads. Product development lifecycle mein performance Optimization aur cross-browser support ka special focus rakha gaya hai."
  },
  finance: {
    title: "Algorithmic Trading & Financial Dashboard",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600",
    desc: "Ye system automated financial tracking aur trading metrics ke liye build kiya gaya hai. Isme live market trends ko track karne ke liye visual dashboards aur strategic analytics interfaces include hain. Key Highlights: Custom risk-management calculators, real-time data visualizers, trade history logger, aur portfolio breakdown features. Complete layout ko finance/fintech standards ke hisaab se color-coded indicators (green/red metrics) ke sath streamline kiya gaya hai taaki traders aur investors ko instantaneous insight mile."
  },
  business: {
    title: "Smart Business Automation & ERP System",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
    desc: "Bussiness workflows ko automated aur centralized karne ke liye ye enterprise-level management application design ki gayi hai. Isme operational bottlenecks ko hata kar daily tasks ko streamline kiya gaya hai. Key Highlights: Automated client lead collection, internal team workflow track system, inventory overview, business intelligence analytics, aur custom client management dashboards. Manual workload ko 70% kam karne aur business scalability ko fast boost karne ke liye is solution ko build kiya gaya hai."
  }
};

// 3. Card click hone par Pop-up kholne ka logic
function openProjectModal(key) {
  const data = projectDetails[key];
  
  document.getElementById('modal-title').innerText = data.title;
  document.getElementById('modal-img').src = data.image;
  document.getElementById('modal-desc').innerText = data.desc;
  
  document.getElementById('detail-modal').classList.remove('hidden');
}

// 4. Pop-up Band (Close) karne ka logic
function closeModal() {
  document.getElementById('detail-modal').classList.add('hidden');
}
