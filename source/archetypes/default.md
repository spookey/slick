---
title: "{{ replace .Name "-" " " | title }}"
slug: {{ replace .Name "_" "-" | urlize }}
date: {{ .Date }}
type: {{ .Type }}
draft: true
---
