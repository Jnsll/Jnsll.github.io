---
layout: page
title: "Energy Measurement of LLM-Based Agentic Systems"
description: "Design and validate a methodology to measure and analyze energy use of autonomous LLM agent workflows."
level: MSc
status: open
importance: 3
supervisors:
  - name: June Sallou
    email: june.sallou@wur.nl
---

<div class="d-flex gap-2 mb-3">
  <span class="badge rounded-pill" style="background-color:#00a6d6;">MSc Thesis</span>
  <span class="badge rounded-pill" style="background-color:#007a3d;">Wageningen University & Research</span>
  <span class="badge rounded-pill bg-success">Open</span>
</div>

> LLM agents can solve complex tasks by chaining tools, memory, and reasoning
> loops. This thesis asks a practical question: how much energy do those loops
> cost, and where exactly is it spent?

---

## The Problem

LLM-based agentic systems are rapidly being adopted for software engineering,
analysis, and decision support. Compared with single-shot prompts, agents often
execute long trajectories: planning, invoking tools, revising outputs, and
calling models repeatedly.

These systems can deliver strong task performance, but their energy and carbon
cost remain poorly characterized. Existing benchmarks mainly focus on quality,
latency, or token usage, and provide limited insight into end-to-end energy
consumption at the workflow level.

---

## What This Thesis Is About

This thesis focuses on creating a reproducible methodology for **measuring
energy use in LLM-based agentic systems**. The objective is to move beyond
proxy metrics and provide evidence-backed analysis of where energy is consumed
across model inference, tool execution, orchestration overhead, and retries.

---

## International Collaboration

This thesis is carried out in collaboration with international colleagues in
Italy. Students will benefit from an international research setting.

---

## Objectives

1. **Define a measurement protocol** for agentic workflows, including task
   scenarios, instrumentation boundaries, and reporting units.
2. **Instrument the full execution pipeline** to capture compute and energy
   signals across LLM calls, tools, and orchestration logic.
3. **Compare agent design choices** (models, planning depth, tool-use
   strategies, retry policies) and quantify trade-offs between quality, latency,
   and energy.
4. **Deliver practical guidance** for building more energy-efficient agentic AI
   systems in real development settings.

---

## What You Will Do

| Phase | Work |
|---|---|
| **Literature & setup** | Review Green AI, LLM systems, and energy-measurement methods; select an agent framework and representative tasks |
| **Method design** | Define metrics, workloads, and controlled experiment settings for fair comparisons |
| **Implementation** | Build instrumentation and logging pipeline for agent runs and associated energy signals |
| **Evaluation** | Run experiments across configurations; analyze energy-quality-latency trade-offs |
| **Reporting** | Produce thesis artifacts: methodology, dataset of runs, and recommendations |

---

## Who Should Apply

**Required courses:**
- Programming in Python (INF-22306)
- Machine Learning (FTE-35306)
- Big Data (INF-33806)

**Required skills & mindset:**
- Strong Python programming and data analysis skills
- Interest in AI systems and sustainability
- Comfort with experimentation, benchmarking, and reproducibility
- Familiarity with LLM tooling is a plus

---

## Key References

- Verdecchia, R., Sallou, J., & Cruz, L. (2023). A systematic review of Green
  AI. *WIREs Data Mining and Knowledge Discovery*, 13(4), e1507.
  [doi:10.1002/widm.1507](https://doi.org/10.1002/widm.1507)
- Henderson, P., Hu, J., Romoff, J., Brunskill, E., Jurafsky, D., & Pineau, J.
  (2020). Towards the systematic reporting of the energy and carbon footprints
  of machine learning. *Journal of Machine Learning Research*, 21(248), 1-43.
- Lacoste, A., Luccioni, A., Schmidt, V., & Dandres, T. (2019). Quantifying the
  carbon emissions of machine learning. *arXiv:1910.09700*.
- Strubell, E., Ganesh, A., & McCallum, A. (2019). Energy and policy
  considerations for deep learning in NLP. *ACL 2019*, 3645-3650.
- Luccioni, A. S., Jernite, Y., & Strubell, E. (2024). Power Hungry Processing:
  Watts Driving the Cost of AI Deployment? *FAccT '24*.
  [doi:10.1145/3630106.3658542](https://doi.org/10.1145/3630106.3658542)
- Kim, B., Choi, Y., Mei, H., et al. (2025). The ML.ENERGY Benchmark: Toward
  Automated Inference Energy Measurement and Optimization.
  *arXiv:2505.06371*.
  [arXiv:2505.06371](https://arxiv.org/abs/2505.06371)
- Ni, Y., Wang, Y., Lu, M., et al. (2026). Budget-Constrained Agentic Large
  Language Models: Intention-Based Planning for Costly Tool Use.
  *arXiv:2602.11541*.
  [arXiv:2602.11541](https://arxiv.org/abs/2602.11541)
- Wang, Z., Luo, X., Liu, H., et al. (2026). Spend Less, Reason Better:
  Budget-Aware Value Tree Search for LLM Agents. *arXiv:2603.12634*.
  [arXiv:2603.12634](https://arxiv.org/abs/2603.12634)
- Tripathy, A., Harshit, C. P., & Vaidhyanathan, K. (2025). SWEnergy: An
  Empirical Study on Energy Efficiency in Agentic Issue Resolution Frameworks
  with SLMs. *arXiv:2512.09543*.
  [arXiv:2512.09543](https://arxiv.org/abs/2512.09543)

---

## Supervisors

<p>{% for supervisor in page.supervisors %}<i class="fa-solid fa-envelope"></i>&nbsp;<a href="mailto:{{ supervisor.email }}">{{ supervisor.name }}</a>{% unless forloop.last %}&nbsp;&nbsp;·&nbsp;&nbsp;{% endunless %}{% endfor %}</p>
