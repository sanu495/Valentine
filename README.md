# Valentine's Day Gift Project 💕

A beautiful, interactive Valentine's Day gift web application built with **FastAPI**, HTML, CSS, and JavaScript. Features an adorable "Will You Be My Valentine?" question page where the "No" button runs away, followed by multiple romantic pages celebrating your love!

## 🎯 Features

### Page 1: Will You Be My Valentine? 
- **Interactive Question Page** with animated teddy bear 🧸 and bunnies 🐰
- **Moving "No" Button** - The No button runs away when you try to click it!
- **Growing "Yes" Button** - Gets bigger and more attractive as she hovers over "No"
- **Floating Hearts** - Beautiful animated hearts floating across the screen
- **Confetti Celebration** - Bursts of confetti when she says YES!
- **Animated Emojis** - Teddy bears and bunnies react to interactions

### Page 2: Celebration
- **Fireworks Display** - Colorful fireworks animation
- **Hearts Rain** - Hearts falling from the sky
- **Dancing Emojis** - Animated celebration emojis
- **Navigation Cards** - Beautiful cards to explore other pages

### Page 3: Love Letter
- **Animated Envelope** - Opens to reveal a heartfelt letter
- **Days Counter** - Shows how many days you've been together
- **Personalized Message** - Romantic love letter with custom content
- **Floating Hearts Background**

### Page 4: Memories Gallery
- **Photo Cards** - Polaroid-style photo frames (placeholders for your photos)
- **Interactive Gallery** - Cards animate on hover and click
- **Romantic Quote** - Beautiful love quote display
- **Floating Hearts**

### Page 5: Reasons Why I Love You
- **Interactive Heart Button** - Click to reveal random reasons
- **20 Pre-written Reasons** - Customizable reasons
- **Reveal All Button** - Show all reasons at once
- **Animated Particles** - Hearts and sparkles floating around

## 🚀 Installation & Setup

### Prerequisites
- Python 3.8 or higher
- pip (Python package installer)

### Step 1: Install Dependencies

```bash
cd valentine-fastapi-gift
pip install -r requirements.txt
```

Or install packages individually:
```bash
pip install fastapi uvicorn jinja2 python-multipart
```

### Step 2: Run the Application

```bash
python main.py
```

Or using uvicorn directly:
```bash
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

### Step 3: Open in Browser

Navigate to: `http://localhost:8000`

The application will open with the "Will You Be My Valentine?" question page!

## 📝 Customization Guide

### 1. Change the Meeting Date

In `main.py`, line 28, update the meeting date:

```python
meeting_date = datetime(2024, 2, 14)  # Change to your actual date (YYYY, M, D)
```

### 2. Personalize the Love Letter

Edit `templates/love_letter.html` to customize the letter content. Look for the `.letter-body` section and update the paragraphs with your own words.

### 3. Update "Reasons Why I Love You"

In `main.py`, lines 56-77, edit the `reasons_list` array:

```python
reasons_list = [
    "Your custom reason 1",
    "Your custom reason 2",
    # Add more reasons...
]
```

### 4. Add Real Photos

In `templates/memories.html`, replace the photo placeholder emojis with actual images:

```html
<div class="photo-frame">
    <img src="/static/images/photo1.jpg" alt="Memory" style="width: 100%; border-radius: 3px;">
    <div class="polaroid-text">First Date</div>
</div>
```

Place your photos in the `static/images/` directory.

### 5. Customize Colors

Edit the CSS files in `static/css/` to change colors:
- `question.css` - Question page colors
- `celebration.css` - Celebration page colors
- `love-letter.css` - Love letter page colors
- `memories.css` - Memories page colors
- `reasons.css` - Reasons page colors

Main color variables:
- Pink: `#ff6b9d`
- Purple: `#667eea`, `#764ba2`
- Gradient backgrounds in each file

### 6. Edit the "No" Button Messages

In `static/js/question.js`, lines 8-17, update the `noMessages` array:

```javascript
const noMessages = [
    "Your custom message 1",
    "Your custom message 2",
    // Add more messages...
];
```

## 📁 Project Structure

```
valentine-fastapi-gift/
│
├── main.py                 # FastAPI backend application
├── requirements.txt        # Python dependencies
│
├── templates/              # HTML templates
│   ├── question.html       # "Will You Be My Valentine?" page
│   ├── celebration.html    # Celebration page
│   ├── love_letter.html    # Love letter page
│   ├── memories.html       # Memories gallery page
│   └── reasons.html        # Reasons page
│
├── static/                 # Static files
│   ├── css/                # Stylesheets
│   │   ├── question.css
│   │   ├── celebration.css
│   │   ├── love-letter.css
│   │   ├── memories.css
│   │   └── reasons.css
│   │
│   ├── js/                 # JavaScript files
│   │   ├── question.js
│   │   ├── celebration.js
│   │   ├── love-letter.js
│   │   ├── memories.js
│   │   └── reasons.js
│   │
│   └── images/             # (Create this for your photos)
│
└── README.md              # This file
```

## 🎨 Features Breakdown

### Question Page Mechanics
- **No Button Behavior**: Uses absolute positioning to move randomly within the container
- **Yes Button Growth**: Scales up using CSS transforms and animations
- **Teddy Reaction**: Adds "excited" class with bouncing animation
- **Hearts Explosion**: Creates multiple floating hearts on interaction

### Animation Technologies
- **CSS Keyframe Animations**: Smooth, performant animations
- **CSS Transforms**: Scale, rotate, and translate effects
- **JavaScript DOM Manipulation**: Dynamic element creation
- **Event Listeners**: Interactive user experiences

## 🌐 Deployment Options

### Local Network Access
Access from other devices on your network:
```bash
python main.py
# Then access via http://YOUR_IP_ADDRESS:8000
```

### Deploy to Cloud (Recommended)

#### Option 1: Heroku
1. Create a `Procfile`:
   ```
   web: uvicorn main:app --host 0.0.0.0 --port $PORT
   ```
2. Deploy using Heroku CLI

#### Option 2: Railway
1. Connect your GitHub repository
2. Railway auto-detects FastAPI
3. Deploy with one click

#### Option 3: Render
1. Create new Web Service
2. Connect repository
3. Build command: `pip install -r requirements.txt`
4. Start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`

#### Option 4: PythonAnywhere
1. Upload files
2. Create web app with manual configuration
3. Set up WSGI file for FastAPI

## 💡 Tips for Best Experience

1. **Test on Mobile**: The site is responsive but test on actual devices
2. **Personalize Everything**: The more personal touches, the better
3. **Add Real Photos**: Replace placeholders with your actual memories
4. **Test the No Button**: Make sure it's positioned correctly on your device
5. **Check the Counter**: Verify the days together calculation is accurate
6. **Use Headphones**: For the full experience (if adding sound)

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Use a different port
uvicorn main:app --host 0.0.0.0 --port 8080
```

### Static Files Not Loading
Make sure the `static` directory structure is correct and FastAPI is mounting it properly.

### CSS Not Applying
Clear browser cache or open in incognito mode.

### Mobile Display Issues
Check the responsive CSS media queries in each CSS file.

## 📱 Browser Compatibility

Works best on:
- ✅ Chrome (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎁 Sharing Your Gift

### Option 1: Share Locally
Run on your computer and share the link when together

### Option 2: Deploy and Share Link
Deploy to a hosting service and send her the link

### Option 3: QR Code
Generate a QR code to the deployed URL for easy access

## 📄 License

This is a personal project created for love! Feel free to use and modify for your own Valentine's gift. Share the love! ❤️

## 🙏 Credits

Created with love using:
- FastAPI (Python web framework)
- Google Fonts (Pacifico, Poppins, Dancing Script)
- Pure CSS animations
- Vanilla JavaScript

## ❤️ Final Notes

This project is meant to be a heartfelt gift. Take the time to personalize every detail - change the messages, add your photos, update the reasons, and make it truly yours. The effort you put into customization will make it even more special!

Happy Valentine's Day! 💕

---

Made with ❤️ for someone special
