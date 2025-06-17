# Healthy Families NZ Homepage Slider Automation

[Healthy Families NZ](https://www.healthyfamiliesnz.org/) is a large-scale prevention initiative focused on bringing community leadership together for better health in the places we live, learn, work, and play. Their goal is to create health-promoting environments and address the underlying conditions that impact health and wellbeing across New Zealand.

## Project Purpose

The purpose of this project was to **automate the process of updating the homepage slider** on the Healthy Families NZ website, so staff wouldn't have to manually update the content every time there was new news or a new story to feature.

## What Was Done

- **Saved the original page:**
  - The original HTML of the Squarespace homepage was saved to inspect the structure and ensure that changes would not break the design.

- **Tried creating a new element:**
  - The initial approach was to fetch the new data and build a brand new slider/carousel component from scratch. This turned out to be tricky, as it was hard to match all the original styles, layout, and navigation features that Squarespace provides out of the box.

- **Switched to updating the existing component:**
  - The strategy was changed: the script now waits for the page to load, finds the existing Squarespace slider, and just swaps out the data inside it (images, titles, descriptions, and links). This keeps all the original styles, layout, and navigation arrows intact.

- **No more manual updates:**
  - Now, whenever new data is available, the script automatically updates the slider content, so staff don't have to do it by hand.

- **No flash of old content:**
  - The slider is hidden by default until the new data is loaded, so users never see outdated content.

- **Mobile-friendly:**
  - The script and CSS ensure that images fill the card area on mobile, using `object-fit: cover`, so the design looks great on all devices.

## Why This Approach?
- **Non-destructive:** Keeps all original Squarespace functionality and design.
- **Flexible:** Can be adapted to other Squarespace components or similar platforms.
- **User-friendly:** No "flash" of old content, and works well on mobile.

## About Healthy Families NZ
Learn more about the initiative at [https://www.healthyfamiliesnz.org/](https://www.healthyfamiliesnz.org/)

---

*This project is a great example of how to automate content updates on a Squarespace site while preserving the original design and user experience.*
