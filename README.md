# 💝 Valentine's Day Special Website 💝

A beautiful, interactive Valentine's Day website with animations, cute emojis, and a fun "Will You Be My Valentine?" question page!

## ✨ Features

- **Interactive Question Page**: Fun "Yes/No" buttons with the "No" button that runs away!
- **Celebration Page**: Beautiful fireworks and falling hearts animation
- **Love Letter**: Animated envelope with a heartfelt letter
- **Photo Memories**: Gallery of special moments (with placeholder emojis)
- **Reasons Why I Love You**: Interactive heart button to reveal reasons

## 🎨 Design Highlights

- **Professional & Cute Design**: Beautiful gradients, smooth animations, and adorable emojis
- **80% Zoom Ratio**: Optimized layout that looks great at 80% browser zoom
- **Fully Responsive**: Works on desktop, tablet, and mobile devices
- **Smooth Animations**: Heartbeats, floating hearts, fireworks, and more!
- **Fixed Button Issue**: The "No" button properly runs away from the cursor

## 🚀 Installation & Setup

### Prerequisites
- Python 3.8 or higher
- pip (Python package installer)

### Installation Steps

1. **Navigate to the project directory:**
   ```bash
   cd valentine_project
   ```

2. **Install required packages:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Run the application:**
   ```bash
   python main.py
   ```

4. **Open your browser and visit:**
   ```
   http://127.0.0.1:8000
   ```

## 📁 Project Structure

```
valentine_project/
├── static/
│   ├── css/
│   │   ├── celebration.css
│   │   ├── love-letter.css
│   │   ├── memories.css
│   │   ├── question.css
│   │   ├── reasons.css
│   │   └── style.css
│   └── js/
│       ├── celebration.js
│       ├── love-letter.js
│       ├── memories.js
│       ├── question.js
│       ├── reasons.js
│       └── script.js
├── templates/
│   ├── celebration.html
│   ├── index.html
│   ├── love_letter.html
│   ├── memories.html
│   ├── question.html
│   └── reasons.html
├── main.py
├── requirements.txt
└── README.md
```

## 🎯 Usage

1. **Start Page**: The main page asks "Will You Be My Valentine?" with Yes/No buttons
2. **No Button**: Runs away when you try to click it (fun interaction!)
3. **Yes Button**: Leads to a celebration page with fireworks
4. **Navigation**: Follow the journey through Love Letter → Memories → Reasons
5. **Interactive Elements**: Click on emojis, hearts, and buttons for fun animations

## 🎨 Customization

### Change Meeting Date
Edit `main.py` line 31:
```python
meeting_date = datetime(2024, 2, 14)  # Change to your date!
```

### Customize Reasons
Edit the `reasons_list` in `main.py` starting at line 41.

### Add Your Photos
Replace the emoji placeholders in `memories.html` with your actual photos.

## 💖 Features in Detail

### Question Page (/)
- Cute teddy bear and bunny animations
- "No" button that moves away from cursor (FIXED!)
- Modal popup when clicking "No"
- Confetti explosion on "Yes"

### Celebration Page (/celebration)
- Continuous fireworks display
- Falling hearts animation
- Dancing emojis
- Navigation buttons to other pages

### Love Letter (/love-letter)
- Animated envelope opening
- Days counter since you met
- Beautiful scrollable letter

### Memories (/memories)
- Photo gallery with hover effects
- Floating hearts background
- Inspirational quote

### Reasons (/reasons)
- Interactive heart button
- Random reason display
- "Show All Reasons" button
- Animated background particles

## 🐛 Bug Fixes

✅ **Fixed Button Positioning Issue**: The "No" button now properly runs away from the cursor using improved positioning logic
✅ **Optimized for 80% Zoom**: All layouts look great at 80% browser zoom
✅ **Enhanced Animations**: Smoother, more professional animations throughout
✅ **Improved Responsiveness**: Better mobile and tablet support

## 🎉 Browser Compatibility

- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅

## 📱 Mobile Support

The website is fully responsive and works great on:
- Desktop (1920x1080 and above)
- Tablet (768px - 1024px)
- Mobile (320px - 767px)

## 💝 Tips

- **Best Experience**: View at 80% browser zoom for optimal layout
- **Recommendation**: Use Chrome or Firefox for best animation performance
- **Mobile**: Rotate to landscape for better view on small screens

## 🎊 Enjoy!

Have fun with your Valentine! This project was made with ❤️

---

**Note**: Remember to customize the meeting date and reasons to make it personal and special! 💕
