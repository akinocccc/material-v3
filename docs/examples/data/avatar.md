---
layout: doc
sidebar: true
editLink: true
---

# Avatar

## Size

<preview path="./usage/avatar/size.vue" title="Description" description="Set avatar's size by size property"></preview>

## Shape

<preview path="./usage/avatar/shape.vue" title="Description" description="Set avatar's size by shape property. Supports circle and square."></preview>

## Type

<preview path="./usage/avatar/type.vue" title="Description" description="Supports images and characters and supports setting background color when it's characters type."></preview>

## Api

### Attributes

| Name    | Description                                              | Type                                                                     | Default |
| :------ | :------------------------------------------------------- | :----------------------------------------------------------------------- | :------ |
| src     | image avatar source.                                     | `string`                                                                 | -       |
| src-set | native attribute srcset of image avatar.                 | `string`                                                                 | -       |
| size    | avatar size.                                             | `small` &#124; `default` &#124; `large` &#124; `number`                  | default |
| shape   | avatar shape.                                            | `circle` &#124; `square`                                                 | circle  |
| fit     | set how the image fit its container for an image avatar. | `fill` &#124; `contain` &#124; `cover` &#124; `none` &#124; `scale-down` | cover   |

## Events

| Name  | Description                    | Type       |
| :---- | :----------------------------- | :--------- |
| error | trigger when image load error. | `Function` |

## Slots

| Name    | Description              |
| :------ | :----------------------- |
| default | customize avatar content |
