---
layout: page
title: "Carbon Accounting for Drone Image Datasets and AI Models"
description: "Design a framework to estimate and document emissions of drone imagery datasets and AI models."
level: MSc
status: open
importance: 2
supervisors:
  - name: June Sallou
    email: june.sallou@wur.nl
  - name: Onder Babur
    email: onder.babur@wur.nl
wur_url: "https://wur.jobteaser.com/en/backend/job-offers/e25aa175-32e1-4e17-9cf7-6257aaf818cf-wur-inf-thesis-estimating-the-carbon-footprint-of-uavs-image-datasets-and-ai-models-msc"
---

<div class="d-flex gap-2 mb-3">
  <span class="badge rounded-pill" style="background-color:#00a6d6;">MSc Thesis</span>
  <span class="badge rounded-pill" style="background-color:#007a3d;">Wageningen University & Research</span>
  <span class="badge rounded-pill bg-success">Open</span>
</div>

---

## Overview

Drone imagery is increasingly used to train AI models for agriculture, ecology,
and environmental monitoring. However, the carbon emissions linked to
producing, storing, and using these datasets and models are rarely quantified.

---

## Description

Large collections of drone (UAV) images are becoming a key resource for
AI-driven analysis in domains such as precision agriculture, biodiversity
monitoring, and land-use assessment. While these datasets enable powerful
models, they also introduce hidden environmental costs related to data
acquisition flights, storage, processing, and model training and evaluation.

This thesis focuses on estimating and structuring the carbon emissions
associated with drone image datasets and the AI models built on top of them.
The goal is to design a dataset-centric framework, conceptually similar to a
dataset hub, where drone image datasets are documented together with their
associated carbon footprints and the emissions of AI models trained or
evaluated using them.

---

## Objectives

This project is connected to ongoing research in Green AI and sustainable
data-centric AI. Rather than optimizing models alone, the thesis focuses on
emissions at the dataset and usage level. The following aspects are of
interest:

1. **Carbon estimation for drone image datasets** - define how to estimate
   emissions linked to drone flights, data transfer, storage, and preprocessing
   of image datasets.
2. **Carbon accounting for AI models using drone imagery** - quantify emissions
   related to training and evaluating AI models that rely on these datasets.
3. **Design of a dataset and model documentation framework** - propose a
   structured way to document datasets, models, and their associated carbon
   emissions, inspired by dataset cards and model cards.
4. **Comparative evaluation and decision support** - explore how carbon metrics
   can support more sustainable choices between datasets, models, or training
   strategies.

---

## Tasks

The work in this master thesis entails:

- Conducting a focused literature study on carbon accounting for AI,
  data-centric AI, and sustainability of drone-based sensing.
- Defining a methodology to estimate carbon emissions for drone image datasets
  and AI model usage, including assumptions and limitations.
- Designing and implementing a prototype dataset and model registry that stores
  metadata and carbon estimates.
- Applying the framework to one or more example datasets and models, and
  analyzing the results and trade-offs between accuracy and emissions.

---

## Literature

- Doornbos, J., & Babur, O. (2025). Ending Overfitting for UAV Applications -
  Self-Supervised Pretraining on Multispectral UAV Data. *ISPRS Annals of the
  Photogrammetry, Remote Sensing and Spatial Information Sciences*,
  X-2-W2-2025, 31-39.
  [doi:10.5194/isprs-annals-X-2-W2-2025-31-2025](https://doi.org/10.5194/isprs-annals-X-2-W2-2025-31-2025)
- Strubell, E., Ganesh, A., & McCallum, A. (2019). Energy and policy
  considerations for deep learning in NLP. *ACL 2019*, 3645-3650.
- Lacoste, A., Luccioni, A., Schmidt, V., & Dandres, T. (2019). Quantifying the
  carbon emissions of machine learning. *arXiv:1910.09700*.
- Henderson, P., Hu, J., Romoff, J., Brunskill, E., Jurafsky, D., & Pineau, J.
  (2020). Towards the systematic reporting of the energy and carbon footprints
  of machine learning. *Journal of Machine Learning Research*, 21(248), 1-43.
- Verdecchia, R., Sallou, J., & Cruz, L. (2023). A systematic review of Green
  AI. *WIREs Data Mining and Knowledge Discovery*, 13(4), e1507.
  [doi:10.1002/widm.1507](https://doi.org/10.1002/widm.1507)
- Duran, P., Castano, J., Gomez, C., & Martinez-Fernandez, S. (2024).
  GAISSALabel: A Tool for Energy Labeling of ML Models. *ACM Conferences*.
  [doi:10.1145/3663529.3663811](https://doi.org/10.1145/3663529.3663811)

---

## Requirements

**Courses:**
- Programming in Python (INF-22306)
- Machine Learning (FTE-35306)
- Big Data (INF-33806)
- Optional: Software Engineering

**Required skills and knowledge:**
- Programming and data analysis skills
- Interest in AI, sustainability, and carbon accounting
- Willingness to work with datasets, metadata, and experimental evaluation
- Affinity with drone analytics or geospatial data is a plus

**Keywords:**
Green AI, carbon emissions, drone imagery, datasets, data-centric AI,
sustainable machine learning, environmental impact

---

## Contact Person(s)

<p>{% for supervisor in page.supervisors %}<i class="fa-solid fa-envelope"></i>&nbsp;<a href="mailto:{{ supervisor.email }}">{{ supervisor.name }}</a>{% unless forloop.last %}&nbsp;&nbsp;·&nbsp;&nbsp;{% endunless %}{% endfor %}</p>

---

Interested? The official listing is available on the
[JobTeaser platform]({{ page.wur_url }}){:target="_blank"}.
