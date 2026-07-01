---
layout: page
title: "Finding and Fixing Energy Bugs in Software Systems"
description: "Profile, identify, and fix hidden energy inefficiencies in real-world software systems."
level: MSc
status: open
importance: 1
supervisors:
  - name: June Sallou
    email: june.sallou@wur.nl
  - name: Kwabena Ebo Bennin
    email: kwabena.bennin@wur.nl
wur_url: "https://wur.jobteaser.com/en/backend/job-offers/4a95bb3d-9443-4aa2-a03b-cb468a92b5a0-wur-inf-thesis-finding-and-fixing-energy-bugs-in-software-systems-msc"
---

<div class="d-flex gap-2 mb-3">
  <span class="badge rounded-pill" style="background-color:#00a6d6;">MSc Thesis</span>
  <span class="badge rounded-pill" style="background-color:#007a3d;">Wageningen University & Research</span>
  <span class="badge rounded-pill bg-success">Open</span>
</div>

> Most developers write code that works. This thesis is about writing code that
> works _and_ does not silently drain energy. It turns out, the two are not the
> same, and the difference matters.

---

## The Problem

Energy consumption in software is not spread evenly. In most applications, a
small number of functions, components, or runtime behaviours account for a
disproportionately large share of total energy use. These come in two flavours:

- **Energy hotspots** — code paths that are inherently intensive and consume
  far more energy than the rest of the system
- **Energy bugs** — unintended behaviours that cause unnecessary and persistent
  energy drain: idle loops that never sleep, redundant recomputations, memory
  leaks that force expensive garbage collection

The challenge is that these inefficiencies are largely invisible. Unlike a
crash or a wrong output, an energy bug leaves no error message. It just quietly
costs electricity, and carbon, for as long as the software runs.

---

## What This Thesis Is About

This project combines **software profiling**, **energy measurement**, and
**empirical analysis** to make the invisible visible: connecting measured energy
consumption back to concrete source-code decisions in real-world software
systems.

Unlike work that optimises at the hardware or infrastructure level, this thesis
targets **software-level causes**, the kind of insights that a developer can
act on directly.

---

## Objectives

1. **Identify and characterise energy hotspots and bugs** in a real open-source
   software system — pinpoint which parts of the code consume disproportionate
   energy or exhibit unintended energy-draining behaviour during execution.

2. **Link energy to software behaviour** — go beyond treating energy as a black
   box metric by relating measured consumption to concrete runtime events:
   CPU-intensive functions, memory allocation patterns, I/O activity, and more.

3. **Evaluate mitigation strategies** — implement and assess code-level,
   configuration-level, or workload-level fixes, and analyse the trade-offs
   they introduce with respect to performance and correctness.

4. **Deliver a reusable methodology** — produce a reproducible experimental
   workflow that can be applied to other software systems and future research
   projects in sustainable software engineering.

---

## What You Will Do

| Phase                  | Work                                                                                                                    |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Literature & setup** | Focused study on energy hotspots and bugs; selection of a suitable open-source system and representative workloads      |
| **Experiment design**  | Design and implement a repeatable environment combining software profiling with energy measurement                      |
| **Analysis**           | Run controlled experiments to identify and characterise the main energy inefficiencies                                  |
| **Improvement**        | Propose, implement, and evaluate one or more fixes; analyse trade-offs between energy use, performance, and correctness |
| **Dissemination**      | Write up findings in a thesis; document the methodology for reuse                                                       |

---

## Who Should Apply

**Required courses:**

- Programming in Python (INF22306)
- Software Engineering (INF32306)

**Required skills & mindset:**

- Ability to read and modify existing codebases
- Programming and data analysis skills (Python)
- Genuine interest in sustainability and empirical software engineering
- Willingness to learn new profiling and measurement tools

---

## Key References

- Noureddine, A., Rouvoy, R., & Seinturier, L. (2015). Monitoring energy
  hotspots in software. _Automated Software Engineering_, 22(3), 291–332.
  [doi:10.1007/s10515-014-0171-1](https://doi.org/10.1007/s10515-014-0171-1)

- Verdecchia, R., Guldner, A., Becker, Y., & Kern, E. (2018). Code-Level Energy
  Hotspot Localization via Naive Spectrum Based Testing. _Advances and New
  Trends in Environmental Informatics_. Springer.
  [doi:10.1007/978-3-319-99654-7_8](https://doi.org/10.1007/978-3-319-99654-7_8)

- Hindle, A. (2015). Green mining: A methodology of relating software change
  and configuration to power consumption. _Empirical Software Engineering_,
  20(2), 374–409.

- Green Software Foundation. (2023). Software carbon intensity specification.

---

## Supervisors

<p>{% for supervisor in page.supervisors %}<i class="fa-solid fa-envelope"></i>&nbsp;<a href="mailto:{{ supervisor.email }}">{{ supervisor.name }}</a>{% unless forloop.last %}&nbsp;&nbsp;·&nbsp;&nbsp;{% endunless %}{% endfor %}</p>

---

Interested? Send a short email with your CV and a paragraph on why this topic
draws you in. The official listing is also available on the
[JobTeaser platform]({{ page.wur_url }}){:target="_blank"}.
