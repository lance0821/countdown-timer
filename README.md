# Countdown Timer

A minimalist, elegant countdown timer built with React, TypeScript, and Tailwind CSS v4. This project demonstrates clean code principles, modern React patterns, and a focus on simplicity following the KISS (Keep It Simple, Stupid) principle.

![React](https://img.shields.io/badge/React-19.1.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-blue)
![Vite](https://img.shields.io/badge/Vite-7.1.2-purple)

## 🚀 Features

- **Simple Countdown**: Enter any number of seconds and watch it count down
- **Instant Reset**: Start button immediately restarts the timer, even mid-countdown
- **Clean UI**: Minimalist dark theme with purple accents
- **Real-time Updates**: Smooth second-by-second countdown
- **Zero Dependencies**: Only essential React and build tools

## 🛠 Tech Stack

- **React 19** - Latest React with hooks (useState, useEffect)
- **TypeScript** - Type-safe component props and state
- **Tailwind CSS v4** - Utility-first CSS with zero custom classes
- **Vite** - Lightning-fast HMR and builds
- **Bun** - Fast JavaScript runtime and package manager

## 📁 Project Structure

```
src/
├── components/           # React components
│   └── CountdownTimer.tsx   # Timer display component
├── App.tsx              # Main app with input controls
├── main.tsx             # React DOM entry point
└── index.css            # Tailwind imports
```

## 🎨 Design Philosophy

### Simplicity First

### Key React Concepts Demonstrated

- **State Management**: Simple useState for form and timer state
- **Side Effects**: useEffect for interval management
- **Component Keys**: Force remounting for timer reset
- **Controlled Inputs**: React-managed form inputs
- **Cleanup Functions**: Proper interval cleanup

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, or bun package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/countdown-timer.git
cd countdown-timer
```

2. Install dependencies:

```bash
bun install
# or npm install
```

3. Start the development server:

```bash
bun run dev
# or npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

```bash
bun run dev      # Start development server
bun run build    # Build for production
bun run lint     # Run ESLint
bun run preview  # Preview production build
```

## 🏗 Architecture Decisions

### Component Breakdown

**App.tsx** (55 lines)
- Manages input state
- Handles timer reset logic via key prop
- Renders input controls and timer

**CountdownTimer.tsx** (42 lines)
- Displays countdown in seconds
- Manages interval with useEffect
- Handles cleanup on unmount

## 🔧 How It Works

### Timer Reset Mechanism

```javascript
// Key state forces React to recreate the component
const [timerKey, setTimerKey] = useState(0);

// Increment key = new component instance
<CountdownTimer key={timerKey} initialSeconds={60} />
```

### Interval Management

```javascript
useEffect(() => {
  const timer = setInterval(() => {
    setSecondsLeft(prev => prev > 0 ? prev - 1 : 0);
  }, 1000);
  
  return () => clearInterval(timer); // Cleanup
}, [initialSeconds]);
```

## 📱 UI Features

- **Gradient Background**: Purple to gray gradient
- **Card Design**: Rounded corners with shadow
- **Large Display**: 8xl font size for visibility
- **Hidden Spinners**: Clean number input without arrows
- **Hover States**: Interactive button feedback

## 🎯 Learning Points

This project is excellent for learning:

1. **React Hooks**: Practical useState and useEffect usage
2. **Component Lifecycle**: Understanding mount/unmount/update
3. **Event Handling**: Form inputs and button clicks
4. **TypeScript Basics**: Component props typing
5. **Tailwind CSS**: Utility-first styling approach
6. **Clean Code**: Avoiding premature abstraction


## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

This project values simplicity. Contributions should:
- Not add unnecessary abstraction
- Follow existing patterns
- Keep components under 100 lines
- Include clear comments for learning

## 👤 Author

**Lance Lewandowski**

- GitHub: [@llewandowski](https://github.com/llewandowski)

## 🙏 Acknowledgments

- Inspired by the need for simple, readable code examples
- Demonstrates that less code often means fewer bugs