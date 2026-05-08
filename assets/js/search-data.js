// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-supervision",
          title: "Supervision",
          description: "Overview of PhD, MSc, BSc, and internship supervisions.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/students/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "dropdown-academic-services",
              title: "Academic services",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/services/";
              },
            },{id: "dropdown-media-and-outreach",
              title: "Media and Outreach",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/media/";
              },
            },{id: "dropdown-awards",
              title: "Awards",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/awards/";
              },
            },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-rocket-quantum4energynl-receives-funding-from-the-4tu-nirict-amp-amp-4tu-energy-joint-call-community-funding-2025-project-website",
          title: ':rocket: Quantum4EnergyNL receives funding from the 4TU.NIRICT &amp;amp;amp; 4TU.Energy Joint Call Community Funding...',
          description: "",
          section: "News",},{id: "news-satellite-agora-6g-is-awarded-4tu-nirict-research-funding-for-reproducible-and-governable-open-ran-testbeds-in-ai-native-6g-official-announcement",
          title: ':satellite: AGORA-6G is awarded 4TU.NIRICT Research Funding for reproducible and governable Open RAN...',
          description: "",
          section: "News",},{id: "news-page-with-curl-paper-accepted-in-ieee-software-making-sense-of-ai-agents-hype-adoption-architectures-and-takeaways-from-practitioners",
          title: ':page_with_curl: Paper accepted in IEEE Software: Making Sense of AI Agents Hype: Adoption,...',
          description: "",
          section: "News",},{id: "news-page-with-curl-paper-published-in-entertainment-computing-game-engines-for-sustainable-open-science-software-a-case-study",
          title: ':page_with_curl: Paper published in Entertainment Computing: Game engines for sustainable open science software:...',
          description: "",
          section: "News",},{id: "news-page-with-curl-paper-accepted-in-automated-software-engineering-advancing-research-software-engineering-with-ai-a-research-framework",
          title: ':page_with_curl: Paper accepted in Automated Software Engineering: Advancing Research Software Engineering with AI:...',
          description: "",
          section: "News",},{id: "news-page-with-curl-paper-accepted-at-icvr-2026-carbon-chat-a-virtual-reality-game-to-raise-awareness-of-the-environmental-impact-of-llms",
          title: ':page_with_curl: Paper accepted at ICVR 2026: Carbon Chat: A Virtual Reality Game to...',
          description: "",
          section: "News",},{id: "news-giving-a-workshop-at-icai-summer-school-2026-on-measuring-and-reducing-the-ai-energy-footprint-event-page",
          title: 'Giving a workshop at ICAI Summer School 2026 on measuring and reducing the...',
          description: "",
          section: "News",},{id: "projects-agora-6g",
          title: 'AGORA-6G',
          description: "Reproducible and governable Open RAN testbeds for AI-native 6G.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/AGORA-6G/";
            },},{id: "projects-quantum4energynl",
          title: 'Quantum4EnergyNL',
          description: "Cross-disciplinary 4TU initiative exploring quantum technologies for next-generation power and energy systems.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Quantum4Energy/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{id: "thesis_offers-how-ai-developers-discuss-sustainability-concerns-in-practice",
          title: 'How AI Developers Discuss Sustainability Concerns in Practice',
          description: "Explore how AI developers talk about energy, carbon, and sustainability trade-offs, and what this means for better tools and practices.",
          section: "Thesis_offers",handler: () => {
              window.location.href = "/thesis-offers/developer-sustainability-concerns-ai/";
            },},{id: "thesis_offers-carbon-accounting-for-drone-image-datasets-and-ai-models",
          title: 'Carbon Accounting for Drone Image Datasets and AI Models',
          description: "Design a framework to estimate and document emissions of drone imagery datasets and AI models.",
          section: "Thesis_offers",handler: () => {
              window.location.href = "/thesis-offers/drone-dataset-carbon-accounting/";
            },},{id: "thesis_offers-finding-and-fixing-energy-bugs-in-software-systems",
          title: 'Finding and Fixing Energy Bugs in Software Systems',
          description: "Profile, identify, and fix hidden energy inefficiencies in real-world software systems.",
          section: "Thesis_offers",handler: () => {
              window.location.href = "/thesis-offers/energy-bugs/";
            },},{id: "thesis_offers-energy-measurement-of-llm-based-agentic-systems",
          title: 'Energy Measurement of LLM-Based Agentic Systems',
          description: "Design and validate a methodology to measure and analyze energy use of autonomous LLM agent workflows.",
          section: "Thesis_offers",handler: () => {
              window.location.href = "/thesis-offers/energy-measurement-agentic-llms/";
            },},{id: "thesis_offers-assessing-the-impact-of-llm-output-variability-on-energy-consumption",
          title: 'Assessing the Impact of LLM Output Variability on Energy Consumption',
          description: "Explore how output-length and response variability in LLMs influence inference energy use and sustainability trade-offs.",
          section: "Thesis_offers",handler: () => {
              window.location.href = "/thesis-offers/llm-output-variability-energy-impact/";
            },},{id: "thesis_offers-exploring-reproducibility-in-ai-energy-research",
          title: 'Exploring Reproducibility in AI Energy Research',
          description: "Explore why AI energy results vary across setups and build practical guidelines for more reliable reporting.",
          section: "Thesis_offers",handler: () => {
              window.location.href = "/thesis-offers/reproducibility-ai-energy-research/";
            },},{id: "thesis_offers-small-language-models-vs-large-language-models-energy-benefits-and-trade-offs",
          title: 'Small Language Models vs Large Language Models: Energy Benefits and Trade-offs',
          description: "Compare SLMs and LLMs across tasks to quantify when smaller models provide meaningful energy savings without unacceptable quality loss.",
          section: "Thesis_offers",handler: () => {
              window.location.href = "/thesis-offers/slm-vs-llm-energy-benefits/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
