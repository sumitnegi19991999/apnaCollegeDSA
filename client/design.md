🎨 UI Design Document
Project: DSA Sheet Tracker
Goal: Clean, polished, and user-friendly design

✨ Design Principles
Clarity: Everything must be easy to read and understand.

Consistency: Same styles across all pages.

Simplicity: No clutter, focus on content.

Responsiveness: Looks good on desktop and mobile.

🌈 Color Palette
Color Usage
Primary: #2563eb Buttons, highlights, links (Blue 600)
Secondary: #f3f4f6 Background sections (Gray 100)
Accent: #10b981 Completed checkboxes, success (Green 500)
Text: #111827 Main text (Gray 900)
Subtext: #6b7280 Muted text (Gray 500)

🖋️ Typography
Primary Font: Inter, Roboto, or system font stack

Headings: Bold, slightly larger

Body: Regular weight

Links: Underlined on hover

📐 Layout
Container Width: Max 800px centered

Spacing: Generous padding (16–24px) around content

Cards: Rounded corners, subtle shadows

Buttons: Solid primary color with white text

Checkboxes: Clear and easily clickable

🧩 Page-by-Page Design
1️⃣ Login & Register Page
Layout:

Centered card

App name/logo at the top

Input fields stacked vertically

Large primary button

Example Layout:

markdown
Copy code
+--------------------------+
| 📝 DSA Sheet Tracker |
|--------------------------|
| Email |
| [___________] |
| Password |
| [___________] |
| [ Log In ] |
| |
| Don't have an account? |
| [ Register ] |
+--------------------------+
2️⃣ Dashboard Page
Sections:

Header with welcome message

Progress Summary Card

Topics List

Example Layout:

markdown
Copy code
Welcome, John!

## [ 📊 Your Progress ]

25 of 100 problems completed
[██████████------------] 25%

## Topics

✅ Arrays (Easy)
✅ Strings (Easy)
🔲 Trees (Medium)
🔲 Graphs (Hard)
Design Notes:

Use check or uncheck icons

Each topic name is a clickable link

3️⃣ Topic Details Page
Sections:

Topic Title

Subtopics List

Example Layout:

less
Copy code
Arrays

## Problem List

[✔] Two Sum (Easy)
YouTube | LeetCode | Article
[ ] Maximum Subarray (Medium)
YouTube | LeetCode | Article
Checkbox Style:

Filled green if completed

Empty if not completed

Links:

Open in new tab

Underline on hover

4️⃣ Progress Page (Optional)
Show completed problems with timestamps:

mathematica
Copy code
✅ Two Sum (Completed July 5)
✅ Reverse String (Completed July 6)
🛠️ Reusable Components
✅ Button

Color: Primary blue background

Rounded corners

Hover state: Darker blue

✅ Card

White background

Rounded corners (8px)

Subtle shadow

Padding: 16px

✅ Progress Bar

Light gray background

Green fill representing percentage

✅ Checkbox

Native checkbox styled larger

Color changes to green when checked

🪞 Interaction Patterns
Hover Effects: For buttons and links

Loading Indicators: Spinners or “Loading…” when fetching data

Toasts/Alerts: For success or error messages

Success: Green background

Error: Red background

📱 Responsiveness
Mobile:

Stack elements vertically

Full-width buttons

Tablet/Desktop:

Centered content with consistent margins

🌟 Example Toolkits
To implement this style easily, you can:

Use Tailwind CSS:

Utility classes for spacing, colors, typography

Example:

html
Copy code
<button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
Log In
</button>
Or use Material UI components for out-of-the-box styling.

📂 Assets & Icons
Use Heroicons or FontAwesome for icons:

Checkmark

User icon

Progress indicators

🎯 Final Thoughts
This design will help you:
✅ Keep things clean and polished
✅ Make it easy for users to navigate
✅ Allow future enhancements without redesigning everything
