window.CV_DATA = {
  profile: {
    name: "Mehdi Mahfoudi",
    photo: "assets/avatar.jpg",
    email: "contact@mahfoudi.me",
    location: {
      fr: "Paris, France",
      en: "Paris, France"
    },
    links: {
      linkedin: {
        label: "linkedin.com/in/mehdi-mahfoudi",
        short: "LinkedIn",
        url: "https://www.linkedin.com/in/mehdi-mahfoudi"
      },
      github: {
        label: "github.com/mehdicopter",
        short: "GitHub",
        url: "https://github.com/mehdicopter"
      },
      website: {
        label: "mahfoudi.me",
        url: "https://mahfoudi.me"
      }
    },
    title: {
      fr: "Head of Infrastructure · Cloud & Platform Lead",
      en: "Head of Infrastructure · Cloud & Platform Lead"
    },
    status: {
      fr: "Architecture Cloud · Platform Engineering · Cybersécurité",
      en: "Cloud Architecture · Platform Engineering · Cybersecurity"
    },
    summary: {
      fr: "Plus de 14 ans d'expérience dans la conception, la sécurisation et le passage à l'échelle d'infrastructures critiques — des datacenters souverains à haute sécurité aux plateformes Cloud, Kubernetes et IA modernes. Animé par l'automatisation, l'impact FinOps et la cybersécurité (défensive comme offensive).",
      en: "14+ years designing, securing, and scaling mission-critical infrastructure—from high-security sovereign datacenters to modern Cloud, Kubernetes, and AI platforms. Driven by automation, FinOps efficiency, and offensive/defensive cybersecurity."
    },
    quote: {
      fr: "Construire des plateformes fiables, sécurisées par défaut et économiquement maîtrisées.",
      en: "Building platforms that are reliable by design, secure by default, and financially disciplined."
    }
  },

  metrics: [
    {
      value: "14+",
      color: "#2563eb",
      bgTint: "rgba(37, 99, 235, 0.08)",
      label: {
        fr: "Années d'expérience Infra, Cloud & Sécurité",
        en: "Years in Infra, Cloud & Security"
      }
    },
    {
      value: "-75%",
      color: "#059669",
      bgTint: "rgba(5, 150, 105, 0.09)",
      label: {
        fr: "Réduction de facture Cloud GCP (FinOps)",
        en: "GCP Cloud Bill Reduction (FinOps)"
      }
    },
    {
      value: "Zero-Trust",
      color: "#7c3aed",
      bgTint: "rgba(124, 58, 237, 0.08)",
      label: {
        fr: "Souveraineté, WIF, Durcissement & SecOps",
        en: "Sovereign Infra, WIF & System Hardening"
      }
    },
    {
      value: { fr: "GCP · K8s · IA", en: "GCP · K8s · AI" },
      color: "#0284c7",
      bgTint: "rgba(2, 132, 199, 0.08)",
      label: {
        fr: "Plateformes Cloud, Bare Metal & Agents IA",
        en: "Cloud Platforms, Bare Metal & AI Agents"
      }
    }
  ],

  ui: {
    fr: {
      experience: "Expériences Professionnelles",
      skills: "Domaines d'Expertise",
      education: "Formation Académique",
      highlights: "Formations Cyber & Publications",
      languages: "Langues",
      interests: "Centres d'intérêt",
      printBtn: "Télécharger CV (PDF)",
      contactBtn: "Me contacter",
      pdfFooter: "Profil complet & liens interactifs sur mahfoudi.me"
    },
    en: {
      experience: "Professional Experience",
      skills: "Core Expertise",
      education: "Education",
      highlights: "Security Training & Publications",
      languages: "Languages",
      interests: "Interests",
      printBtn: "Download CV (PDF)",
      contactBtn: "Get in touch",
      pdfFooter: "Full interactive profile & links at mahfoudi.me"
    }
  },

  experiences: [
    {
      company: "relevanC",
      url: "https://relevanc.com/",
      logo: "assets/logos/relevanc.png",
      logoBg: "#ecfdf5",
      logoFit: "contain",
      brandColor: "#059669",
      location: "Paris, France",
      period: {
        fr: "Janv. 2024 – Sept. 2026",
        en: "Jan 2024 – Sep 2026"
      },
      role: {
        fr: "Head of Infrastructure",
        en: "Head of Infrastructure"
      },
      scope: {
        fr: "Responsable unique de la stratégie Cloud, sécurité et plateforme pour une organisation Tech de 15 ingénieurs.",
        en: "Sole owner of cloud strategy, security posture, and platform engineering supporting a 15-person tech organization."
      },
      bullets: {
        fr: [
          "Refonte, standardisation et mutualisation des plateformes GCP à l'échelle de l'entreprise pour accélérer le delivery des équipes produit.",
          "Pilotage FinOps structurel (rightsizing, architecture et engagements) générant plus de 75 % de réduction sur la facture GCP.",
          "Sécurisation Zero-Trust des environnements et pipelines CI/CD par élimination des clés statiques au profit de Workload Identity Federation.",
          "Déploiement du modèle GitOps autour d'ArgoCD et industrialisation complète via Terraform / Terragrunt.",
          "Conception et développement d'agents IA intégrés aux workflows d'infrastructure, de sécurité et d'exploitation."
        ],
        en: [
          "Redesigned, standardized, and consolidated shared GCP platforms across the company to accelerate product engineering delivery.",
          "Led structural FinOps initiatives (architectural rightsizing and commitment strategy), cutting the GCP bill by over 75%.",
          "Enforced Zero-Trust cloud security by eliminating static keys via Workload Identity Federation across workloads and CI/CD.",
          "Rolled out GitOps continuous delivery with ArgoCD alongside modular Terraform / Terragrunt infrastructure.",
          "Designed and built AI agents automating platform operations, governance, and engineering workflows."
        ]
      },
      pdfBullets: {
        fr: [
          "Pilotage Cloud & plateforme pour 15 ingénieurs : refonte, standardisation et mutualisation GCP via Terraform/Terragrunt et ArgoCD (GitOps).",
          "FinOps à fort impact : optimisation d'architecture et d'engagements réduisant la facture GCP de plus de 75 %.",
          "Sécurisation Zero-Trust (Workload Identity Federation sans clés statiques) et développement d'agents IA d'automatisation Ops/Sec."
        ],
        en: [
          "Owned cloud & platform strategy for a 15-engineer org: standardized shared GCP platforms with Terraform/Terragrunt and ArgoCD (GitOps).",
          "High-impact FinOps: drove architectural rightsizing and commitment optimizations, cutting the GCP bill by over 75%.",
          "Enforced Zero-Trust security (keyless Workload Identity Federation) and built AI agents automating platform & security workflows."
        ]
      },
      tags: ["GCP", "FinOps (-75%)", "Workload Identity", "ArgoCD", "Terraform", "AI Agents"]
    },
    {
      company: "Scaleway",
      url: "https://www.scaleway.com/",
      logo: "assets/logos/scaleway.png",
      logoBg: "#180b30",
      logoFit: "contain",
      brandColor: "#7c3aed",
      location: "Paris, France",
      period: {
        fr: "Sept. 2022 – Déc. 2023",
        en: "Sep 2022 – Dec 2023"
      },
      role: {
        fr: "Senior Site Reliability Engineer",
        en: "Senior Site Reliability Engineer"
      },
      scope: {
        fr: "Ingénierie de fiabilité sur le socle Cloud européen (Instances, Bare Metal & Supercalculateur IA).",
        en: "Reliability engineering for European cloud infrastructure (Virtual Instances, Bare Metal & AI Supercomputer)."
      },
      bullets: {
        fr: [
          "Maintien en conditions opérationnelles, automatisation et fiabilisation à grande échelle des flottes d'hyperviseurs supportant les offres Instances Virtuelles et Serveurs Dédiés (Bare Metal).",
          "Participation au déploiement et à l'exploitation haute disponibilité des clusters GPU dédiés à l'AI Supercomputer de Scaleway.",
          "Ingénierie système bas niveau, virtualisation et orchestration autour de KVM/QEMU, Proxmox, Kubernetes et Ansible."
        ],
        en: [
          "Engineered, automated, and maintained large-scale hypervisor fleets powering public cloud Virtual Instances and Bare Metal servers.",
          "Contributed to the deployment and high-availability operations of high-density GPU clusters backing Scaleway's AI Supercomputer.",
          "Managed low-level virtualization, bare-metal lifecycle, and workload orchestration using KVM/QEMU, Proxmox, Kubernetes, and Ansible."
        ]
      },
      pdfBullets: {
        fr: [
          "Automatisation et MCO à grande échelle des flottes d'hyperviseurs (Instances Virtuelles, Bare Metal) et des clusters GPU de l'AI Supercomputer.",
          "Ingénierie système bas niveau, virtualisation et orchestration : KVM/QEMU, Proxmox, Kubernetes et Ansible."
        ],
        en: [
          "Automated and operated large-scale hypervisor fleets (Virtual Instances, Bare Metal) and high-density GPU clusters for the AI Supercomputer.",
          "Low-level systems engineering, virtualization, and orchestration across KVM/QEMU, Proxmox, Kubernetes, and Ansible."
        ]
      },
      tags: ["Bare Metal", "AI Supercomputer", "KVM / QEMU", "Proxmox", "Kubernetes", "Ansible"]
    },
    {
      company: "MeilleursAgents",
      url: "https://www.meilleursagents.com/",
      logo: "assets/logos/meilleursagents.png",
      logoBg: "#eff6ff",
      logoFit: "contain",
      brandColor: "#2563eb",
      location: "Paris, France",
      period: {
        fr: "Mai 2021 – Août 2022",
        en: "May 2021 – Aug 2022"
      },
      role: {
        fr: "Senior Cloud Engineer",
        en: "Senior Cloud Engineer"
      },
      bullets: {
        fr: [
          "Administration, montée en charge et fiabilisation des clusters Kubernetes (GKE) en production à fort trafic.",
          "Industrialisation de l'infrastructure Cloud en Infrastructure as Code (Terraform) et gestion de configuration Ansible.",
          "Modernisation des chaînes CI/CD combinant Jenkins et le déploiement continu GitOps sous ArgoCD."
        ],
        en: [
          "Operated, scaled, and hardened production Google Kubernetes Engine (GKE) clusters serving high-traffic web platforms.",
          "Automated cloud infrastructure provisioning with Terraform and standardized configuration management with Ansible.",
          "Modernized software delivery pipelines combining Jenkins (CI) and ArgoCD for GitOps continuous deployment."
        ]
      },
      pdfBullets: {
        fr: [
          "Administration et fiabilisation de clusters Kubernetes (GKE) à fort trafic ; industrialisation IaC (Terraform, Ansible) et GitOps (Jenkins, ArgoCD)."
        ],
        en: [
          "Scaled and hardened high-traffic production GKE clusters; automated infrastructure with Terraform, Ansible, Jenkins, and ArgoCD (GitOps)."
        ]
      },
      tags: ["GCP", "GKE", "Terraform", "ArgoCD", "Ansible", "Jenkins"]
    },
    {
      company: "PathMotion",
      url: "https://web.archive.org/web/20210126215125/https://www.instana.com/blog/how-pathmotion-future-proofs-their-cloud-agnostic-platform-with-instana/",
      logo: "assets/logos/pathmotion.png",
      logoBg: "#ffffff",
      logoFit: "cover",
      brandColor: "#4338ca",
      location: "Paris, France",
      period: {
        fr: "Nov. 2019 – Avr. 2021",
        en: "Nov 2019 – Apr 2021"
      },
      role: {
        fr: "Cloud Engineer",
        en: "Cloud Engineer"
      },
      bullets: {
        fr: [
          "Responsable de l'architecture et de l'exploitation GCP (GKE, Cloud Run, Cloud SQL), intégralement gérée avec Terraform.",
          "Conception et automatisation des pipelines d'intégration et de déploiement continus sous CircleCI.",
          "Déploiement d'Instana APM et du suivi SLI/SLO (Grafana), permettant d'optimiser de 10 à 15 % la flotte de nœuds Kubernetes — retour d'expérience publié en tant qu'auteur invité sur le blog officiel d'Instana."
        ],
        en: [
          "Owned end-to-end GCP infrastructure and operations (GKE, Cloud Run, Cloud SQL), 100% provisioned with Terraform.",
          "Designed automated CI/CD workflows with CircleCI to accelerate engineering release velocity.",
          "Rolled out Instana APM and SLI/SLO observability (Grafana), reducing Kubernetes VM footprint by 10–15%—authored as an official guest post on the Instana blog."
        ]
      },
      pdfBullets: {
        fr: [
          "Responsable de l'infrastructure GCP (GKE, Cloud Run, Cloud SQL) sous Terraform et des pipelines CI/CD CircleCI.",
          "Déploiement d'Instana APM et SLI/SLO (-15 % de VMs K8s), publié en tant qu'auteur invité sur le blog officiel d'Instana."
        ],
        en: [
          "Owned end-to-end GCP platform (GKE, Cloud Run, Cloud SQL) provisioned via Terraform and automated CI/CD with CircleCI.",
          "Rolled out Instana APM & SLI/SLO observability (-15% K8s VMs), authored as a guest post on the official Instana blog."
        ]
      },
      tags: ["GCP", "GKE", "Cloud Run", "Terraform", "SLI / SLO", "Grafana", "Instana APM", "CircleCI"]
    },
    {
      company: "Talend",
      url: "https://www.talend.com/",
      logo: "assets/logos/talend.svg",
      logoBg: "#fff1f2",
      logoFit: "contain",
      brandColor: "#f43f5e",
      location: "Suresnes, France",
      period: {
        fr: "Avr. 2019 – Oct. 2019",
        en: "Apr 2019 – Oct 2019"
      },
      role: {
        fr: "Senior Linux System Administrator",
        en: "Senior Linux System Administrator"
      },
      bullets: {
        fr: [
          "Déploiement et structuration de la plateforme de supervision Icinga dans un environnement international multi-sites.",
          "Développement de rôles et playbooks Ansible modulaires, testés automatiquement sur AWS en CI/CD via Travis CI."
        ],
        en: [
          "Deployed and structured infrastructure monitoring with Icinga across an international multi-site environment.",
          "Engineered modular Ansible roles and playbooks continuously tested on AWS via Travis CI."
        ]
      },
      pdfBullets: {
        fr: [
          "Déploiement de la supervision Icinga multi-sites et industrialisation de rôles Ansible testés en continu sur AWS (Travis CI)."
        ],
        en: [
          "Deployed multi-site Icinga monitoring and engineered modular Ansible roles continuously tested on AWS via Travis CI."
        ]
      },
      tags: ["Linux", "Ansible", "Icinga", "AWS", "Travis CI"]
    },
    {
      company: "Direction Générale de la Sécurité Intérieure (DGSI)",
      url: "https://www.dgsi.interieur.gouv.fr/",
      logo: "assets/logos/republique-francaise.svg",
      logoBg: "#ffffff",
      logoFit: "cover",
      brandColor: "#000091",
      location: "Levallois-Perret, France",
      period: {
        fr: "Sept. 2016 – Mars 2019",
        en: "Sep 2016 – Mar 2019"
      },
      role: {
        fr: "Lead Sysadmin / Architecte Infrastructure",
        en: "Lead Sysadmin / Infrastructure Architect"
      },
      scope: {
        fr: "Ministère de l'Intérieur — Infrastructures souveraines à très haut niveau de sécurité.",
        en: "French Ministry of the Interior — Sovereign infrastructures under stringent national-security requirements."
      },
      bullets: {
        fr: [
          "Lead de l'équipe Infrastructure : conception, déploiement en datacenter et maintien en conditions opérationnelles de plateformes critiques.",
          "Durcissement système et cryptographie avancée (SELinux, PKI/TLS, GPG, authentification matérielle YubiKey) et cloisonnement physique des flux par diode réseau.",
          "Centralisation, corrélation et exploitation des journaux de sécurité sur stack ELK."
        ],
        en: [
          "Led the Infrastructure team: architected, deployed in datacenters, and operated mission-critical sovereign platforms.",
          "Enforced strict system hardening and cryptography (SELinux, PKI/TLS, GPG, YubiKey hardware auth) alongside physical air-gap isolation via unidirectional network diodes.",
          "Built centralized security logging and audit pipelines powered by the ELK stack."
        ]
      },
      pdfBullets: {
        fr: [
          "Lead équipe Infrastructure : architecture datacenter et MCO de plateformes souveraines à très fortes contraintes de sécurité.",
          "Durcissement & cryptographie (SELinux, PKI/TLS, GPG, YubiKey), cloisonnement par diode réseau et centralisation de logs ELK."
        ],
        en: [
          "Infrastructure Team Lead: architected and operated mission-critical sovereign datacenters under stringent security constraints.",
          "Enforced system hardening & cryptography (SELinux, PKI/TLS, GPG, YubiKey), network-diode air-gapping, and ELK security logging."
        ]
      },
      tags: ["Sovereign Infra", "SELinux", "PKI / GPG", "YubiKey", "Network Diode", "ELK", "DataCenter"]
    },
    {
      company: "Direction Nationale de la Police Aux Frontières (DNPAF)",
      url: null,
      logo: "assets/logos/republique-francaise.svg",
      logoBg: "#ffffff",
      logoFit: "cover",
      brandColor: "#000091",
      location: "Paris, France",
      period: {
        fr: "Déc. 2014 – Août 2016",
        en: "Dec 2014 – Aug 2016"
      },
      role: {
        fr: "Administrateur Systèmes & Virtualisation",
        en: "System & Virtualization Administrator"
      },
      bullets: {
        fr: [
          "Refonte complète de l'architecture de virtualisation VMware vSphere à l'échelle de la Police Aux Frontières.",
          "Administration et maintien en conditions opérationnelles du domaine Active Directory et des services d'infrastructure critiques."
        ],
        en: [
          "Led the full redesign and modernization of the VMware vSphere virtualization infrastructure for the French Border Police.",
          "Maintained high availability and security of core Active Directory domain services."
        ]
      },
      pdfBullets: {
        fr: [
          "Refonte complète de l'infrastructure de virtualisation VMware vSphere nationale et administration critique Active Directory."
        ],
        en: [
          "Redesigned the national VMware vSphere virtualization infrastructure and maintained core Active Directory services."
        ]
      },
      tags: ["VMware vSphere", "Active Directory", "Infrastructure Redesign"]
    },
    {
      company: "Direction Centrale du Renseignement Intérieur (DCRI)",
      url: "https://www.dgsi.interieur.gouv.fr/",
      logo: "assets/logos/republique-francaise.svg",
      logoBg: "#ffffff",
      logoFit: "cover",
      brandColor: "#000091",
      location: "Levallois-Perret, France",
      period: {
        fr: "Juil. 2012 – Déc. 2014",
        en: "Jul 2012 – Dec 2014"
      },
      role: {
        fr: "Administrateur Systèmes Linux",
        en: "Linux System Administrator"
      },
      bullets: {
        fr: [
          "Industrialisation du déploiement et administration du parc serveurs Linux (Debian, RHEL/CentOS) sur infrastructure VMware.",
          "Mise en place de la plateforme de supervision système et réseau (Nagios / Shinken)."
        ],
        en: [
          "Industrialized provisioning and lifecycle administration of Linux server fleets (Debian, RHEL/CentOS) on VMware.",
          "Implemented centralized system and network monitoring using Nagios / Shinken."
        ]
      },
      pdfBullets: {
        fr: [
          "Industrialisation du parc serveurs Linux (Debian, RHEL/CentOS) sous VMware et déploiement de la supervision Nagios / Shinken."
        ],
        en: [
          "Industrialized Linux server fleets (Debian, RHEL/CentOS) on VMware and deployed Nagios / Shinken monitoring."
        ]
      },
      tags: ["Linux", "Debian / RHEL", "VMware", "Nagios / Shinken"]
    }
  ],

  skills: [
    {
      color: "#2563eb",
      category: {
        fr: "Cloud & Infrastructure",
        en: "Cloud & Infrastructure"
      },
      items: ["Google Cloud Platform (GCP)", "Scaleway", "Bare Metal", "KVM / QEMU", "Proxmox", "VMware vSphere"]
    },
    {
      color: "#7c3aed",
      category: {
        fr: "Kubernetes, IaC & GitOps",
        en: "Kubernetes, IaC & GitOps"
      },
      items: ["Kubernetes (GKE)", "ArgoCD", "Terraform", "Terragrunt", "Ansible", "GitLab CI", "GitHub Actions"]
    },
    {
      color: "#e11d48",
      category: {
        fr: "Cybersécurité & SecOps",
        en: "Cybersecurity & SecOps"
      },
      items: ["Workload Identity Federation", "Zero-Trust", "SELinux", "PKI / TLS / GPG", "YubiKey", "Network Diodes", "Pentesting (Linux & Windows)"]
    },
    {
      color: "#059669",
      category: {
        fr: "Observabilité, FinOps & IA",
        en: "Observability, FinOps & AI"
      },
      items: ["SLI / SLO", "Grafana", "Prometheus", "Cloud FinOps", "AI Agents"]
    }
  ],

  highlights: [
    {
      type: { fr: "Formation Cyber", en: "Offensive Security" },
      year: "Synacktiv",
      logo: "assets/logos/synacktiv.svg",
      logoBg: "#18181b",
      logoFit: "cover",
      title: {
        fr: "Pentesting Linux Systems",
        en: "Pentesting Linux Systems"
      },
      subtitle: {
        fr: "Sécurité offensive, élévation de privilèges et exploitation Linux",
        en: "Offensive security, privilege escalation, and Linux exploitation"
      },
      url: "https://www.synacktiv.com/en/offres/formations/pentesting-linux-systems.html"
    },
    {
      type: { fr: "Formation Cyber", en: "Offensive Security" },
      year: "Synacktiv",
      logo: "assets/logos/synacktiv.svg",
      logoBg: "#18181b",
      logoFit: "cover",
      title: {
        fr: "Pentesting Windows Systems",
        en: "Pentesting Windows Systems"
      },
      subtitle: {
        fr: "Sécurité offensive Active Directory et environnements Windows",
        en: "Offensive security on Windows internals and Active Directory"
      },
      url: "https://www.synacktiv.com/en/offres/formations/pentesting-windows-systems.html"
    },
    {
      type: { fr: "Article (Auteur)", en: "Authored Post" },
      year: "Nov. 2020",
      logo: "assets/logos/instana.png",
      logoBg: "#f1f5f9",
      logoFit: "contain",
      title: {
        fr: "How PathMotion Future Proofs Their Cloud-Agnostic Platform with Instana",
        en: "How PathMotion Future Proofs Their Cloud-Agnostic Platform with Instana"
      },
      subtitle: {
        fr: "Article invité rédigé pour le blog officiel Instana (archive Wayback Machine)",
        en: "Guest engineering blog post authored for Instana (Wayback Machine archive)"
      },
      url: "https://web.archive.org/web/20210126215125/https://www.instana.com/blog/how-pathmotion-future-proofs-their-cloud-agnostic-platform-with-instana/"
    },
    {
      type: { fr: "Concours", en: "Award" },
      year: "2014",
      logo: "assets/logos/republique-francaise.svg",
      logoBg: "#ffffff",
      logoFit: "cover",
      title: {
        fr: "Technicien des SIC de Classe Supérieure",
        en: "Senior ICT Technician Competitive Examination"
      },
      subtitle: {
        fr: "Lauréat du concours du Ministère de l'Intérieur",
        en: "Laureate — French Ministry of the Interior"
      },
      url: null
    }
  ],

  education: [
    {
      school: "CNAM — Sécurité Défense",
      logo: "assets/logos/cnam.svg",
      logoBg: "#c41230",
      logoFit: "cover",
      location: "Ploufragan, France",
      period: "2011 – 2012",
      degree: {
        fr: "Formation Cyberdéfense · Réseaux & Télécommunications",
        en: "Cyberdefense Program · Computer Networks & Telecommunications"
      },
      url: "https://cnamsecuritedefense.fr/formation-securite-telecoms-reseaux/"
    },
    {
      school: "Czech Technical University (ČVUT)",
      logo: "assets/logos/cvut.png",
      logoBg: "#0065bd",
      logoFit: "cover",
      location: "Prague, Czechia",
      period: "2010 – 2011",
      degree: {
        fr: "Programme Erasmus · Réseaux & Télécommunications",
        en: "Erasmus Exchange · Networking & Telecommunications"
      },
      url: "https://www.cvut.cz/en"
    },
    {
      school: "Université de La Rochelle — IUT",
      logo: "assets/logos/larochelle.png",
      logoBg: "#0d6cb5",
      logoFit: "cover",
      location: "La Rochelle, France",
      period: "2008 – 2010",
      degree: {
        fr: "DUT Réseaux et Télécommunications",
        en: "Associate Degree (DUT) in Networks & Telecommunications"
      },
      url: null
    }
  ],

  languages: [
    {
      name: { fr: "Français", en: "French" },
      level: { fr: "Langue maternelle", en: "Native" }
    },
    {
      name: { fr: "Anglais", en: "English" },
      level: { fr: "Courant professionnel (C1)", en: "Full professional proficiency" }
    }
  ],

  interests: {
    fr: ["Jiu-Jitsu Brésilien (JJB)", "Cuisine", "Badminton"],
    en: ["Brazilian Jiu-Jitsu (BJJ)", "Cooking", "Badminton"]
  }
};
