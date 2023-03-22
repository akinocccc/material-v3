---
layout: doc
sidebar: true
editLink: true
---

# Loading

## Display

<docs-display :component="AniLoading" :componentProps="componentProps" />

<script setup lang="ts">
import DocsDisplay from '../../components/docs-display/index.tsx';
import { AniLoading } from "../../../dist";
const componentProps = [
  {
    type: 'circle',
    show: true,
  }, {
    type: 'incomplete-circle',
    show: true,
  }
];
</script>

<style>
@import '../../../dist/style.css'
</style>
