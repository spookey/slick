---
title: "{{ replace .TranslationBaseName "-" " " | title }}"
slug: {{ replace .TranslationBaseName "_" "-" | urlize }}
description: null
date: {{ .Date }}
type: {{ .Type }}
draft: true
menu: main
categories:
- General
tags:
-
series:
-
---
