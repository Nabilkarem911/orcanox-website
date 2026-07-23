# Orcanox Platform 🚀

**Next-Generation AI & Automation Infrastructure**

Orcanox is a unified platform delivering AI agents, OCR automation, trading intelligence, and enterprise-grade cloud infrastructure — all managed through a single ecosystem.

## Services

- **AI Agents** — Multi-agent systems with shared memory and orchestration
- **OCR & Vision** — High-accuracy document processing API
- **Trading Intelligence** — Automated trading bots with real-time analysis
- **Unified LLM API** — Single gateway for all major AI providers
- **Cloud Infrastructure** — Docker Swarm + Traefik + Dokploy
- **OSINT Toolkit** — Comprehensive intelligence gathering tools

## Tech Stack

- Static site built with vanilla HTML/CSS/JS
- Docker + Nginx for deployment
- Traefik for SSL and routing
- Hosted on Oracle Cloud infrastructure

## Local Development

```bash
# Serve locally
python3 -m http.server 8000
# Open http://localhost:8000
```

## Deployment

```bash
docker build -t orcanox-website .
docker run -p 8080:80 orcanox-website
```

## Domain

🌐 [orcanox.xyz](https://orcanox.xyz)

---

Built with ❤️ by [Nabil Karem](https://github.com/Nabilkarem911)
