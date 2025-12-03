# EduPons - Bridge to Your Next Stride

A role-based platform designed to unify students, educators, and companies into a single ecosystem that promotes visibility, engagement, and career readiness.

## 🚀 Technology Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **UI Library**: Chakra UI v2+
- **Styling**: Emotion (CSS-in-JS)
- **State Management**: React Context + Hooks
- **API Client**: Axios
- **Form Validation**: Zod
- **Code Quality**: ESLint, Prettier, Husky
- **Deployment**: Vercel
- **CI/CD**: GitHub Actions

## 📋 Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- Git

## 🛠️ Getting Started

### 1. Clone the repository

\`\`\`bash
git clone <repository-url>
cd edupons
\`\`\`

### 2. Install dependencies

\`\`\`bash
npm install
\`\`\`

### 3. Set up environment variables

Create a \`.env.local\` file in the root directory:

\`\`\`env
# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3001/api
NEXT_PUBLIC_APP_URL=http://localhost:3000

# App Configuration
NEXT_PUBLIC_APP_NAME=EduPons
\`\`\`

### 4. Run the development server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

\`\`\`
edupons/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout with Chakra Provider
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/            # Reusable UI components
│   ├── lib/                   # Utility functions and configurations
│   │   ├── api/              # API client and endpoints
│   │   ├── env.ts            # Environment variable validation
│   │   └── utils.ts          # Helper functions
│   ├── theme/                # Chakra UI theme customization
│   │   ├── index.ts          # Main theme export
│   │   ├── colors.ts         # Color palette
│   │   └── components.ts     # Component style overrides
│   ├── types/                # TypeScript type definitions
│   └── hooks/                # Custom React hooks
├── public/                   # Static assets
├── .github/                  # GitHub Actions workflows
└── ...config files
\`\`\`

## 🎨 Brand Colors

- **Primary**: #2446A8 (default), #2E58D1 (hover), #182E6D (pressed), #C6C6C6 (disabled)
- **Secondary**: #A4BAF8

## 📜 Available Scripts

- \`npm run dev\` - Start development server
- \`npm run build\` - Build for production
- \`npm run start\` - Start production server
- \`npm run lint\` - Run ESLint
- \`npm run lint:fix\` - Fix ESLint errors
- \`npm run format\` - Format code with Prettier
- \`npm run format:check\` - Check code formatting
- \`npm run type-check\` - Run TypeScript type checking

## 🔧 Development Workflow

1. Create a new branch for your feature: \`git checkout -b feature/your-feature-name\`
2. Make your changes
3. Run linting and type checking: \`npm run lint && npm run type-check\`
4. Format your code: \`npm run format\`
5. Commit your changes (Husky will run pre-commit hooks)
6. Push to your branch and create a Pull Request

## 🚢 Deployment

The application is automatically deployed to Vercel when changes are pushed to the main branch.

### Manual Deployment

\`\`\`bash
npm run build
npm run start
\`\`\`

## 🧪 Testing

Testing setup will be added in Phase 5 of the development plan.

## 📝 Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is proprietary and confidential.

## 👥 Team

- Product Manager: 1
- Frontend Developers: 4
- Backend Developers: 6
- Product Designers: 5
- DevOps: 1

## 📞 Support

For support, please contact the development team.

---

**EduPons** - Empowering students, educators, and companies to connect and grow together.
