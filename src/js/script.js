document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("#menu-links a");
  const sections = document.querySelectorAll(".content-section");
  const pageTitle = document.getElementById("page-title");
  const bannerImg = document.getElementById("banner-img");

  // Dados para atualizar o Banner dinamicamente
  const bannerConfig = {
    sobre: {
      title: "Sobre Mim",
      img: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?auto=format&fit=crop&w=1350&q=80",
    },
    formacao: {
      title: "Formação",
      img: "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?auto=format&fit=crop&w=1350&q=80",
    },
    portfolio: {
      title: "Portfólio",
      img: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&w=1350&q=80",
    },
    contato: {
      title: "Contato",
      img: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=1350&q=80",
    },
  };

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const target = link.getAttribute("data-page");

      // 1. Atualizar Classe Ativa no Menu
      links.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");

      // 2. Trocar Seção Visível
      sections.forEach((section) => {
        section.classList.remove("active");
        if (section.id === target) {
          section.classList.add("active");
        }
      });

      // 3. Efeito de Transição no Banner
      pageTitle.style.opacity = 0;
      bannerImg.style.opacity = 0;

      setTimeout(() => {
        pageTitle.innerText = bannerConfig[target].title;
        bannerImg.src = bannerConfig[target].img;

        pageTitle.style.opacity = 1;
        bannerImg.style.opacity = 0.6; // Valor conforme o CSS
      }, 350);

      // 4. Voltar ao topo suavemente
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
});
