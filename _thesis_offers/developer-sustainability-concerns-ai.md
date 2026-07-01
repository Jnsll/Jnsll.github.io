---
layout: page
title: "How AI Developers Discuss Sustainability Concerns in Practice"
description: "Explore how AI developers talk about energy, carbon, and sustainability trade-offs, and what this means for better tools and practices."
level: MSc
status: open
importance: 6
supervisors:
  - name: June Sallou
    email: june.sallou@wur.nl
---

<div class="d-flex gap-2 mb-3">
  <span class="badge rounded-pill" style="background-color:#00a6d6;">MSc Thesis</span>
  <span class="badge rounded-pill" style="background-color:#007a3d;">Wageningen University & Research</span>
  <span class="badge rounded-pill bg-success">Open</span>
</div>

> Sustainability in AI is not only a technical issue. It is also a communication
> issue: what developers discuss, what they ignore, and how teams justify
> trade-offs under real delivery pressure.

---

## The Problem

AI developers make many decisions that influence energy use and carbon impact:
model choice, infrastructure setup, prompt strategy, retraining frequency, and
deployment configuration. Yet we still know relatively little about how
developers actually discuss these sustainability concerns in day-to-day work.

Without that understanding, it is difficult to design effective guidelines,
metrics, and tools that fit real development practices.

---

## What This Thesis Is About

This thesis explores **how AI developers discuss sustainability concerns in
practice** across technical and social spaces (for example issue trackers,
pull-request discussions, forums, and documentation). The goal is to identify
recurring themes, tensions, and decision patterns around energy and carbon
trade-offs in AI development.

This is a strong fit for students who enjoy combining AI/software engineering
with empirical research that has direct impact on real-world practice.

---

## Why This Topic Is Exciting

- You work at the intersection of AI, sustainability, and developer behavior.
- You gain mixed-method research skills (qualitative coding plus quantitative
  analysis).
- You produce insights that can directly inform greener engineering workflows
  and tool design.

---

## Objectives

1. **Map sustainability discourse patterns** in AI developer communities and
   projects.
2. **Identify barriers and enablers** that shape whether sustainability concerns
   are raised and acted upon.
3. **Analyze how trade-offs are framed** between performance, cost, speed, and
   environmental impact.
4. **Propose actionable recommendations** for teams, maintainers, and tool
   builders to better support sustainability-aware AI development.

---

## What You Will Do

| Phase                  | Work                                                                                      |
| ---------------------- | ----------------------------------------------------------------------------------------- |
| **Scoping & protocol** | Define research questions, data sources, and coding framework                             |
| **Data collection**    | Collect and curate developer discussions from selected AI projects/communities            |
| **Analysis**           | Apply qualitative/quantitative analysis to identify themes, patterns, and trade-offs      |
| **Validation**         | Triangulate findings via comparison across projects or small follow-up interviews/surveys |
| **Outputs**            | Deliver thesis, curated dataset/coding schema, and practical recommendations              |

---

## What You Gain

- Experience with high-value empirical methods used in software engineering and
  HCI-style research.
- A strong portfolio piece combining AI, sustainability, and developer studies.
- Skills in translating evidence into practical guidance for research and
  industry audiences.

---

## Who Should Apply

**Required courses:**

- Programming in Python (INF-22306)
- Machine Learning (FTE-35306)
- Big Data (INF-33806)

**Required skills & mindset:**

- Solid analytical skills and clear writing
- Interest in AI systems, sustainability, and developer practices
- Curiosity for empirical research (qualitative and quantitative)
- Motivation to work independently while discussing progress regularly

---

## Key References

- Verdecchia, R., Sallou, J., & Cruz, L. (2023). A systematic review of Green
  AI. _WIREs Data Mining and Knowledge Discovery_, 13(4), e1507.
  [doi:10.1002/widm.1507](https://doi.org/10.1002/widm.1507)
- Henderson, P., Hu, J., Romoff, J., Brunskill, E., Jurafsky, D., & Pineau, J.
  (2020). Towards the systematic reporting of the energy and carbon footprints
  of machine learning. _Journal of Machine Learning Research_, 21(248), 1-43.
- Strubell, E., Ganesh, A., & McCallum, A. (2019). Energy and policy
  considerations for deep learning in NLP. _ACL 2019_, 3645-3650.
- Luccioni, A. S., Jernite, Y., & Strubell, E. (2024). Power Hungry Processing:
  Watts Driving the Cost of AI Deployment? _FAccT '24_.
  [doi:10.1145/3630106.3658542](https://doi.org/10.1145/3630106.3658542)

---

## Supervisors

<p>{% for supervisor in page.supervisors %}<i class="fa-solid fa-envelope"></i>&nbsp;<a href="mailto:{{ supervisor.email }}">{{ supervisor.name }}</a>{% unless forloop.last %}&nbsp;&nbsp;·&nbsp;&nbsp;{% endunless %}{% endfor %}</p>
