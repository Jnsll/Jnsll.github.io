---
layout: page
title: "Assessing the Impact of LLM Output Variability on Energy Consumption"
description: "Explore how output-length and response variability in LLMs influence inference energy use and sustainability trade-offs."
level: MSc
status: open
importance: 5
supervisors:
  - name: June Sallou
    email: june.sallou@wur.nl
---

<div class="d-flex gap-2 mb-3">
  <span class="badge rounded-pill" style="background-color:#00a6d6;">MSc Thesis</span>
  <span class="badge rounded-pill" style="background-color:#007a3d;">Wageningen University & Research</span>
  <span class="badge rounded-pill bg-success">Open</span>
</div>

> The same prompt can produce different LLM answers in length, structure, and
> reasoning depth. This thesis explores how that output variability affects
> energy use.

---

## The Problem

Energy studies on LLMs often report averages across tasks and models. In
practice, however, energy use can fluctuate strongly between runs because model
outputs are variable: longer responses, different reasoning trajectories, and
extra decoding steps can change runtime and power demand.

Without understanding this variability, comparisons between prompting
strategies, models, or system settings can be misleading from a sustainability
perspective.

---

## What This Thesis Is About

This thesis investigates **how LLM output variability impacts inference energy
consumption**. The goal is to link output-side characteristics (for example
token count, structure, and response style) to energy patterns, and to identify
which variability factors matter most in practice.

This is a strong fit for students who want to combine AI systems, empirical
analysis, and sustainability into a concrete and timely research project.

---

## Why This Topic Is Exciting

- You study a practical issue that affects benchmarking, deployment cost, and
  environmental impact of LLM systems.
- You gain hands-on experience with LLM experimentation, instrumentation, and
  robust statistical analysis.
- You produce actionable insights for designing greener prompting and inference
  strategies.

---

## Objectives

1. **Characterize output variability** across selected models, prompts, and
   decoding settings.
2. **Measure energy consumption per run** and relate it to output properties
   such as response length and structure.
3. **Quantify sensitivity and uncertainty** in reported energy metrics caused by
   output variability.
4. **Propose practical recommendations** for more stable and energy-aware LLM
   evaluation and usage.

---

## What You Will Do

| Phase | Work |
|---|---|
| **Literature & design** | Review LLM energy measurement and output variability studies; define workloads and metrics |
| **Experiment setup** | Build an experimental pipeline for repeated LLM runs with controlled decoding settings |
| **Data collection** | Execute runs, log outputs and runtime behavior, and collect energy/power measurements |
| **Analysis** | Model relationships between output variability and energy; identify dominant drivers and uncertainty ranges |
| **Outputs** | Deliver thesis, reproducible scripts, and practical guidelines for energy-aware LLM experimentation |

---

## What You Gain

- A portfolio project at the intersection of Green AI and LLM systems.
- Practical skills in experimental design, instrumentation, and quantitative
  data analysis.
- Experience producing reproducible research artifacts useful for PhD or
  industry paths.

---

## Who Should Apply

**Required courses:**
- Programming in Python (INF-22306)
- Machine Learning (FTE-35306)
- Big Data (INF-33806)

**Required skills & mindset:**
- Solid programming and data analysis skills
- Interest in AI systems and sustainability
- Curiosity for empirical experimentation and benchmarking
- Motivation to work independently while discussing progress regularly

---

## Key References

- Verdecchia, R., Sallou, J., & Cruz, L. (2023). A systematic review of Green
  AI. *WIREs Data Mining and Knowledge Discovery*, 13(4), e1507.
  [doi:10.1002/widm.1507](https://doi.org/10.1002/widm.1507)
- Luccioni, A. S., Jernite, Y., & Strubell, E. (2024). Power Hungry Processing:
  Watts Driving the Cost of AI Deployment? *FAccT '24*.
  [doi:10.1145/3630106.3658542](https://doi.org/10.1145/3630106.3658542)
- Kim, B., Choi, Y., Mei, H., et al. (2025). The ML.ENERGY Benchmark: Toward
  Automated Inference Energy Measurement and Optimization.
  *arXiv:2505.06371*.
  [arXiv:2505.06371](https://arxiv.org/abs/2505.06371)
- Henderson, P., Hu, J., Romoff, J., Brunskill, E., Jurafsky, D., & Pineau, J.
  (2020). Towards the systematic reporting of the energy and carbon footprints
  of machine learning. *Journal of Machine Learning Research*, 21(248), 1-43.

---

## Supervisors

<p>{% for supervisor in page.supervisors %}<i class="fa-solid fa-envelope"></i>&nbsp;<a href="mailto:{{ supervisor.email }}">{{ supervisor.name }}</a>{% unless forloop.last %}&nbsp;&nbsp;·&nbsp;&nbsp;{% endunless %}{% endfor %}</p>
