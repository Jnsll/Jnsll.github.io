---
layout: page
title: Thesis Offers
permalink: /thesis-offers/
description: Open MSc and BSc thesis topics in sustainable software engineering and Green AI.
nav: false
---

Below are the thesis topics I am currently offering at Wageningen University &
Research. All topics are connected to my research in sustainable software
engineering and Green AI. If one of them draws your attention, read the full
description and reach out.

{% assign offers = site.thesis_offers %}
{% if offers %}
{% assign offers = offers | sort: "importance" %}
{% endif %}
{% for offer in offers %}
{% if offer.status == "open" %}
<div class="card mb-2 shadow-sm">
  <div class="card-body py-2 px-3">
    <div class="d-flex justify-content-between align-items-center">
      <h6 class="mb-0"><a href="{{ offer.url | relative_url }}">{{ offer.title }}</a></h6>
      {% if offer.level == "MSc" %}
        <span class="badge rounded-pill" style="background-color:#00a6d6;">MSc</span>
      {% elsif offer.level == "BSc" %}
        <span class="badge rounded-pill" style="background-color:#7b2d8b;">BSc</span>
      {% else %}
        <span class="badge rounded-pill" style="background-color:#007a3d;">BSc & MSc</span>
      {% endif %}
    </div>
    <p class="text-muted mb-0 mt-1" style="font-size:0.85em;">{{ offer.description }}</p>
  </div>
</div>
  {% endif %}
{% endfor %}
