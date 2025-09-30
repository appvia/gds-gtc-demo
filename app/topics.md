---
layout: sub-navigation
title: Topics
sectionKey: Topics
order: 1
description: Choose a layout to match the content you want to write.
---
la la la

{% for page in collections.topic | includes("data.theme", "Topics") %}

- [{{ page.data.title }}]({{ page.url }}) – {{ page.data.description }}

{% endfor %}
