# **🌟 Tailwind CSS Ultimate 1-Page Cheat Sheet**

---

## **1. Text & Typography**

| Class                                       | Effect                     |
| ------------------------------------------- | -------------------------- |
| `text-black`, `text-white`, `text-gray-500` | Text color                 |
| `text-xl`, `text-2xl`, `text-3xl`           | Text size                  |
| `font-bold`, `font-semibold`, `font-light`  | Font weight                |
| `uppercase`, `lowercase`, `capitalize`      | Text transform             |
| `truncate`                                  | Ellipsis for overflow text |
| `text-left`, `text-center`, `text-right`    | Text alignment             |
| `leading-*`                                 | Line height                |

---

## **2. Spacing**

| Class                          | Effect                             |
| ------------------------------ | ---------------------------------- |
| `m-*`                          | Margin all sides                   |
| `mt-*`, `mr-*`, `mb-*`, `ml-*` | Margin top/right/bottom/left       |
| `mx-*`, `my-*`                 | Margin horizontal / vertical       |
| `p-*`                          | Padding all sides                  |
| `pt-*`, `pr-*`, `pb-*`, `pl-*` | Padding top/right/bottom/left      |
| `px-*`, `py-*`                 | Padding horizontal / vertical      |
| `space-x-*`, `space-y-*`       | Spacing between flex/grid children |
| `gap-*`                        | Grid/flex gap                      |
| `-mx-*`, `-my-*`               | Negative margins                   |

---

## **3. Layout & Flex/Grid**

| Class                                                                                 | Effect                      |
| ------------------------------------------------------------------------------------- | --------------------------- |
| `w-full`, `h-full`                                                                    | Full width / height         |
| `max-w-*`, `min-w-*`, `max-h-*`, `min-h-*`                                            | Max/min width & height      |
| `flex`, `inline-flex`                                                                 | Flex container              |
| `flex-col`, `flex-row`                                                                | Flex direction              |
| `items-start`, `items-center`, `items-end`                                            | Vertical alignment          |
| `justify-start`, `justify-center`, `justify-end`, `justify-between`, `justify-around` | Horizontal alignment        |
| `grid`, `grid-cols-2`, `grid-cols-3`                                                  | Grid container & columns    |
| `gap-*`                                                                               | Gap between grid/flex items |
| `mx-auto`                                                                             | Center horizontally         |

---

## **4. Position & Layering**

| Class                                     | Effect                      |
| ----------------------------------------- | --------------------------- |
| `relative`, `absolute`, `fixed`, `sticky` | Position types              |
| `top-*`, `right-*`, `bottom-*`, `left-*`  | Offsets                     |
| `z-10`, `z-20`, ...                       | Layer order                 |
| `inset-y-*`, `inset-x-*`                  | Position offset in one axis |

---

## **5. Borders & Corners**

| Class                                                 | Effect                  |
| ----------------------------------------------------- | ----------------------- |
| `border`                                              | 1px border all sides    |
| `border-t`, `border-r`, `border-b`, `border-l`        | Border on specific side |
| `border-color` (`border-black`, `border-gray-600`)    | Border color            |
| `border-2`, `border-4`                                | Border thickness        |
| `border-dashed`, `border-dotted`                      | Border style            |
| `rounded`, `rounded-sm`, `rounded-lg`, `rounded-full` | Rounded corners         |
| `ring`, `ring-2`, `ring-offset-2`                     | Focus outline ring      |

---

## **6. Background & Effects**

| Class                                                  | Effect                      |
| ------------------------------------------------------ | --------------------------- |
| `bg-white`, `bg-gray-100`, `bg-blue-500`, `bg-red-200` | Background color            |
| `bg-color/opacity`                                     | Semi-transparent background |
| `bg-gradient-to-r`, `bg-gradient-to-l`                 | Gradient background         |
| `hover:bg-*`                                           | Background color on hover   |
| `backdrop-blur-sm`, `backdrop-blur-md`                 | Blur effect behind element  |
| `opacity-0` → `opacity-100`                            | Element transparency        |

---

## **7. Transitions & Animation**

| Class                                                             | Effect                      |
| ----------------------------------------------------------------- | --------------------------- |
| `transition`, `transition-all`                                    | Smooth animation            |
| `transition-colors`, `transition-opacity`, `transition-transform` | Animate specific properties |
| `duration-*`                                                      | Transition duration         |
| `ease-linear`, `ease-in`, `ease-out`, `ease-in-out`               | Speed curve                 |
| `animate-spin`, `animate-pulse`, `animate-bounce`                 | Predefined animations       |
| `delay-*`                                                         | Animation delay             |

---

## **8. Interactivity & Misc**

| Class                                                 | Effect                 |
| ----------------------------------------------------- | ---------------------- |
| `cursor-pointer`                                      | Pointer cursor         |
| `select-none`, `select-text`                          | Control text selection |
| `hover:*`, `focus:*`, `active:*`                      | Pseudo-class states    |
| `overflow-auto`, `overflow-hidden`, `overflow-scroll` | Scroll/clip content    |
| `invisible`, `visible`                                | Show/hide element      |

---

✅ **Tip to memorize quickly:**

* **Layout & Spacing** → how things are sized, aligned, and spaced
* **Color & Typography** → how text and background look
* **Border & Effects** → visual separation and shadows
* **Transitions & Interactivity** → animation and user feedback

---