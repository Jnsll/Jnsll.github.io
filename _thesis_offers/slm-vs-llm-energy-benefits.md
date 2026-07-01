---
layout: page
title: "Small Language Models vs Large Language Models: Energy Benefits and Trade-offs"
description: "Compare SLMs and LLMs across tasks to quantify when smaller models provide meaningful energy savings without unacceptable quality loss."
level: MSc
status: open
importance: 7
supervisors:
  - name: June Sallou
    email: june.sallou@wur.nl
---

<div class="d-flex gap-2 mb-3">
  <span class="badge rounded-pill" style="background-color:#00a6d6;">MSc Thesis</span>
  <span class="badge rounded-pill" style="background-color:#007a3d;">Wageningen University & Research</span>
  <span class="badge rounded-pill bg-success">Open</span>
</div>

> Smaller models are often assumed to be greener. But when do SLMs actually
> provide real energy benefits, and what do we lose or gain in quality and
> usability?

---

## The Problem

Small Language Models (SLMs) are increasingly promoted as efficient
alternatives to Large Language Models (LLMs). However, energy comparisons are
often incomplete or context-dependent: gains can vary with task type, prompt
design, output length, hardware, and serving setup.

Without rigorous empirical evidence, teams risk making model choices based on
assumptions rather than measurable sustainability outcomes.

---

## What This Thesis Is About

This thesis investigates **the energy benefits and trade-offs of SLMs versus
LLMs** under realistic inference scenarios. The objective is to quantify where
SLMs provide meaningful energy savings, where they do not, and how those
patterns relate to task performance and deployment constraints.

This is a strong fit for students who want to work on practical Green AI
questions with direct relevance for industry and research decision-making.

---

## Why This Topic Is Exciting

- You work on a timely and high-impact question for sustainable AI deployment.
- You build hands-on expertise in benchmarking, model evaluation, and
  energy-aware experimentation.
- You produce practical recommendations teams can use to choose greener model
  configurations.

---

## Objectives

1. **Design a fair comparison protocol** for SLM and LLM evaluation across
   selected tasks and settings.
2. **Measure and compare energy consumption** during inference under controlled
   workloads.
3. **Analyze energy-quality trade-offs** to identify scenarios where SLMs are
   clearly beneficial or insufficient.
4. **Propose decision guidelines** for selecting model size based on
   sustainability and performance requirements.

---

## What You Will Do

| Phase                  | Work                                                                                   |
| ---------------------- | -------------------------------------------------------------------------------------- |
| **Literature & setup** | Review existing SLM/LLM efficiency work; select tasks, models, and metrics             |
| **Benchmark design**   | Define controlled experiment settings (prompts, decoding, hardware, repetitions)       |
| **Data collection**    | Run SLM and LLM evaluations while logging quality and energy metrics                   |
| **Analysis**           | Quantify trade-offs and identify conditions where SLMs offer robust benefits           |
| **Outputs**            | Deliver thesis, reproducible benchmark scripts, and practical model-selection guidance |

---

## What You Gain

- A portfolio project at the intersection of LLM systems, benchmarking, and
  sustainability.
- Practical skills in reproducible experimentation, measurement tooling, and
  quantitative trade-off analysis.
- Experience producing evidence-based recommendations useful for PhD or
  industry career paths.

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
  AI. _WIREs Data Mining and Knowledge Discovery_, 13(4), e1507.
  [doi:10.1002/widm.1507](https://doi.org/10.1002/widm.1507)
- Luccioni, A. S., Jernite, Y., & Strubell, E. (2024). Power Hungry Processing:
  Watts Driving the Cost of AI Deployment? _FAccT '24_.
  [doi:10.1145/3630106.3658542](https://doi.org/10.1145/3630106.3658542)
- Kim, B., Choi, Y., Mei, H., et al. (2025). The ML.ENERGY Benchmark: Toward
  Automated Inference Energy Measurement and Optimization.
  _arXiv:2505.06371_.
  [arXiv:2505.06371](https://arxiv.org/abs/2505.06371)
- Tripathy, A., Harshit, C. P., & Vaidhyanathan, K. (2025). SWEnergy: An
  Empirical Study on Energy Efficiency in Agentic Issue Resolution Frameworks
  with SLMs. _arXiv:2512.09543_.
  [arXiv:2512.09543](https://arxiv.org/abs/2512.09543)

---

## Supervisors

<p>{% for supervisor in page.supervisors %}<i class="fa-solid fa-envelope"></i>&nbsp;<a href="mailto:{{ supervisor.email }}">{{ supervisor.name }}</a>{% unless forloop.last %}&nbsp;&nbsp;·&nbsp;&nbsp;{% endunless %}{% endfor %}</p>
