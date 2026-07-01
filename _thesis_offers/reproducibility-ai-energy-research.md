---
layout: page
title: "Exploring Reproducibility in AI Energy Research"
description: "Explore why AI energy results vary across setups and build practical guidelines for more reliable reporting."
level: MSc
status: open
importance: 4
supervisors:
  - name: June Sallou
    email: june.sallou@wur.nl
---

<div class="d-flex gap-2 mb-3">
  <span class="badge rounded-pill" style="background-color:#00a6d6;">MSc Thesis</span>
  <span class="badge rounded-pill" style="background-color:#007a3d;">Wageningen University & Research</span>
  <span class="badge rounded-pill bg-success">Open</span>
</div>

> AI energy results are increasingly reported, but how reproducible are they
> across machines, runs, and measurement setups? This thesis explores that
> question through an empirical study.

---

## The Problem

Energy and carbon measurements are now common in Green AI papers. However,
reported values often depend on hidden experimental choices: hardware model and
age, sampling frequency, workload design, software versions, system load, and
carbon-intensity data sources.

As a result, two teams can evaluate similar models yet report substantially
different energy outcomes. This makes it hard to compare methods fairly, reuse
results, or build reliable benchmarks.

---

## What This Thesis Is About

This thesis investigates **reproducibility in AI energy research** through a
systematic empirical study. The goal is to identify where variation comes from,
quantify its impact, and propose practical reporting and experiment-design
guidelines that improve reproducibility.

This is a strong fit for students who want to combine rigorous experiments with
real-world relevance: your work can directly improve how Green AI results are
reported, compared, and trusted.

---

## Why This Topic Is Exciting

- You work on a timely problem at the intersection of AI, sustainability, and
  research quality.
- You build hands-on expertise in experimental design, measurement tooling, and
  reproducible workflows.
- You produce outputs that are useful beyond the thesis itself: reusable
  scripts, reporting templates, and practical recommendations.

---

## Objectives

1. **Define reproducibility dimensions** for AI energy studies (intra-run,
   inter-run, inter-machine, and inter-environment reproducibility).
2. **Replicate selected energy experiments** from recent AI literature using a
   controlled protocol.
3. **Quantify variance sources** across hardware, software stacks, measurement
   tools, workload settings, and reporting units.
4. **Propose a reproducibility checklist** and a lightweight protocol for more
   trustworthy AI energy reporting.

---

## What You Will Do

| Phase                     | Work                                                                                          |
| ------------------------- | --------------------------------------------------------------------------------------------- |
| **Literature & protocol** | Review Green AI reporting practices and reproducibility research; define replication protocol |
| **Experiment setup**      | Build repeatable measurement pipelines and logging scripts for selected AI workloads          |
| **Replication study**     | Reproduce experiments under controlled variations (hardware/software/workload)                |
| **Analysis**              | Measure dispersion and sensitivity; identify dominant variance drivers                        |
| **Outputs**               | Deliver thesis, reproducibility checklist, and reusable experimental artifacts                |

---

## What You Gain

- A portfolio of reproducible AI-energy experiments you can discuss in PhD or
  industry applications.
- Practical skills in Python-based measurement pipelines, benchmarking, and
  quantitative analysis.
- Experience translating technical findings into clear, evidence-based guidance
  for researchers and practitioners.

---

## Who Should Apply

**Required courses:**

- Programming in Python (INF-22306)
- Machine Learning (FTE-35306)
- Big Data (INF-33806)

**Required skills & mindset:**

- Solid programming and data analysis skills
- Interest in empirical software engineering and AI sustainability
- Careful experimental design and documentation habits
- Familiarity with benchmarking is a plus
- Motivation to work independently while regularly discussing progress

---

## Key References

- Verdecchia, R., Sallou, J., & Cruz, L. (2023). A systematic review of Green
  AI. _WIREs Data Mining and Knowledge Discovery_, 13(4), e1507.
  [doi:10.1002/widm.1507](https://doi.org/10.1002/widm.1507)
- Henderson, P., Hu, J., Romoff, J., Brunskill, E., Jurafsky, D., & Pineau, J.
  (2020). Towards the systematic reporting of the energy and carbon footprints
  of machine learning. _Journal of Machine Learning Research_, 21(248), 1-43.
- Lacoste, A., Luccioni, A., Schmidt, V., & Dandres, T. (2019). Quantifying the
  carbon emissions of machine learning. _arXiv:1910.09700_.
- Luccioni, A. S., Jernite, Y., & Strubell, E. (2024). Power Hungry Processing:
  Watts Driving the Cost of AI Deployment? _FAccT '24_.
  [doi:10.1145/3630106.3658542](https://doi.org/10.1145/3630106.3658542)

---

## Supervisors

<p>{% for supervisor in page.supervisors %}<i class="fa-solid fa-envelope"></i>&nbsp;<a href="mailto:{{ supervisor.email }}">{{ supervisor.name }}</a>{% unless forloop.last %}&nbsp;&nbsp;·&nbsp;&nbsp;{% endunless %}{% endfor %}</p>
