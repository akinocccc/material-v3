---
layout: doc
sidebar: true
editLink: true
---

# Layout

> The Material Design responsive layout grid adapts to screen size and orientation.

## Basic

<preview path="./usage/grid/basic.vue" title="Description" description="Using md-grid and md-grid-item to create grid layout and set the number of columns for the grid span using the span attribute."></preview>

## Gap

<preview path="./usage/grid/gap.vue" title="Description" description="Set item's gap using the rowGap and colGap attributes."></preview>

## Alignment

<preview path="./usage/grid/alignment.vue" title="Description" description="Set item's aligment using the justify with start, center, end, space-around, space-between, space-evenly and align with start, center, end attributes."></preview>

## Offset

<preview path="./usage/grid/offset.vue" title="Description" description="Set column offset for every grid item using the offset attribute."></preview>

## Responsive

<preview path="./usage/grid/responsive.vue" title="Description" description="Set the span number of span columns for xs, sm, md, lg and xl."></preview>

## API

### Grid Attributes

| Name    | Description                        | Type                                                                                                    | Default |
| :------ | :--------------------------------- | :------------------------------------------------------------------------------------------------------ | :-----: |
| column  | the number of columns.             | `number`                                                                                                |   12    |
| justify | the horizontal alignment of items. | `start` &#124; `center` &#124; `end` &#124; `space-around` &#124; `space-between` &#124; `space-evenly` |  start  |
| align   | the vertical alignment of items.   | `start` &#124; `center` &#124; `end`                                                                    |  start  |
| rowGap  | the gap of every row.              | `number` &#124; `string` &#124; `object`                                                                |    0    |
| colGap  | the gap of every column.           | `number` &#124; `string` &#124; `object`                                                                |    0    |

### Grid Item Attributes

| Name   | Description                                                          | Type     | Default |
| :----- | :------------------------------------------------------------------- | :------- | :-----: |
| span   | the number of columns for the grid span                              | `number` |    -    |
| offset | the number of columns for the grid offset                            | `number` |    -    |
| offset | the number of columns for the grid offset                            | `number` |    -    |
| xs     | the number of columns for the grid span when `screen width < 600px`  | `number` |    -    |
| sm     | the number of columns for the grid span when `screen width < 900px`  | `number` |    -    |
| md     | the number of columns for the grid span when `screen width < 1200px` | `number` |    -    |
| lg     | the number of columns for the grid span when `screen width < 1530px` | `number` |    -    |
| xl     | the number of columns for the grid span when `screen width > 1530px` | `number` |    -    |
