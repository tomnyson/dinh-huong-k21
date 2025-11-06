// Toggle semester content
function toggleSemester(semesterNumber) {
    const semester = document.querySelector(`#semester-${semesterNumber}`).parentElement;
    const content = document.querySelector(`#semester-${semesterNumber}`);

    semester.classList.toggle('collapsed');
    content.classList.toggle('active');
}

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all courses and cards
    const courses = document.querySelectorAll('.course');
    const cards = document.querySelectorAll('.intro-item, .career-item');

    courses.forEach(course => {
        course.style.opacity = '0';
        course.style.transform = 'translateY(20px)';
        course.style.transition = 'opacity 0.5s, transform 0.5s';
        observer.observe(course);
    });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s, transform 0.5s';
        observer.observe(card);
    });

    // Add active state to navigation based on scroll position
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section[id]');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
});

// Syllabus data - Nội dung chi tiết và thực tế của các môn học
const syllabusData = {
    'COM101': {
        name: 'Tin học cơ sở',
        code: 'COM101',
        credits: 3,
        duration: '45 tiết',
        objectives: 'Trang bị kiến thức nền tảng về máy tính, hệ điều hành, mạng máy tính và công nghệ thông tin cơ bản.',
        content: [
            'Giới thiệu về máy tính và lịch sử phát triển',
            'Kiến trúc máy tính: CPU, RAM, Ổ cứng, Bo mạch chủ',
            'Hệ điều hành: Windows, Linux, macOS',
            'Mạng máy tính và Internet cơ bản',
            'An toàn thông tin và bảo mật',
            'Ứng dụng công nghệ thông tin trong đời sống'
        ],
        outcomes: [
            'Hiểu được cấu trúc và nguyên lý hoạt động của máy tính',
            'Sử dụng thành thạo các công cụ văn phòng',
            'Nắm được kiến thức cơ bản về mạng và Internet',
            'Có ý thức về an toàn thông tin'
        ]
    },
    'WEB101': {
        name: 'Nhập môn lập trình Web',
        code: 'WEB101',
        credits: 3,
        duration: '45 tiết',
        objectives: 'Giới thiệu các khái niệm cơ bản về phát triển web, HTML và CSS để xây dựng các trang web tĩnh.',
        content: [
            'Giới thiệu về Web Development và cách hoạt động của Internet',
            'HTML5: Cấu trúc trang web, các thẻ cơ bản',
            'HTML Forms và Input elements',
            'CSS3: Selector, Properties, Box Model',
            'CSS Layout: Float, Position',
            'Làm việc với Text, Colors, Backgrounds',
            'Thực hành xây dựng trang web tĩnh đơn giản'
        ],
        outcomes: [
            'Hiểu được cấu trúc và nguyên lý hoạt động của website',
            'Xây dựng được các trang web tĩnh với HTML',
            'Tạo giao diện đẹp mắt với CSS',
            'Nắm vững box model và layout cơ bản'
        ]
    },
    'PRO101': {
        name: 'Lập trình cơ bản',
        code: 'PRO101',
        credits: 4,
        duration: '60 tiết',
        objectives: 'Phát triển tư duy lập trình và kỹ năng giải quyết vấn đề thông qua ngôn ngữ lập trình.',
        content: [
            'Giới thiệu về lập trình và thuật toán',
            'Biến, kiểu dữ liệu và toán tử',
            'Cấu trúc điều khiển: if-else, switch-case',
            'Vòng lặp: for, while, do-while',
            'Mảng và chuỗi',
            'Hàm và tham số',
            'Thuật toán tìm kiếm và sắp xếp cơ bản',
            'Đệ quy và backtracking'
        ],
        outcomes: [
            'Phân tích và giải quyết vấn đề bằng thuật toán',
            'Viết code clean và có cấu trúc',
            'Sử dụng thành thạo các cấu trúc dữ liệu cơ bản',
            'Debug và test chương trình hiệu quả'
        ]
    },
    'ENG101': {
        name: 'Tiếng Anh cơ bản',
        code: 'ENG101',
        credits: 3,
        duration: '45 tiết',
        objectives: 'Phát triển kỹ năng tiếng Anh giao tiếp và đọc hiểu tài liệu chuyên ngành IT.',
        content: [
            'Ngữ pháp tiếng Anh cơ bản',
            'Từ vựng chuyên ngành IT',
            'Đọc hiểu tài liệu kỹ thuật',
            'Viết email và báo cáo bằng tiếng Anh',
            'Thuyết trình và giao tiếp trong môi trường làm việc',
            'Kỹ năng nghe và nói'
        ],
        outcomes: [
            'Giao tiếp cơ bản bằng tiếng Anh trong môi trường IT',
            'Đọc hiểu tài liệu kỹ thuật tiếng Anh',
            'Viết email và báo cáo chuyên nghiệp',
            'Tự tin thuyết trình bằng tiếng Anh'
        ]
    },
    'WEB201': {
        name: 'HTML5 & CSS3 nâng cao',
        code: 'WEB201',
        credits: 4,
        duration: '60 tiết',
        objectives: 'Nâng cao kỹ năng xây dựng giao diện web responsive và hiện đại với HTML5 và CSS3.',
        content: [
            'Semantic HTML5 và Accessibility',
            'CSS3 Advanced: Transitions, Transforms, Animations',
            'Flexbox Layout System',
            'CSS Grid Layout',
            'Responsive Web Design với Media Queries',
            'Mobile-First Design Approach',
            'CSS Preprocessors: SASS/SCSS',
            'CSS Frameworks: Bootstrap, Tailwind CSS',
            'Performance Optimization cho CSS'
        ],
        outcomes: [
            'Xây dựng website responsive hoàn chỉnh',
            'Sử dụng thành thạo Flexbox và Grid',
            'Tạo animations và transitions mượt mà',
            'Tối ưu hóa hiệu suất trang web'
        ]
    },
    'JS101': {
        name: 'JavaScript cơ bản',
        code: 'JS101',
        credits: 4,
        duration: '60 tiết',
        objectives: 'Học lập trình JavaScript để tạo tính tương tác cho website.',
        content: [
            'JavaScript fundamentals: Variables, Data types, Operators',
            'Functions và Arrow Functions',
            'Objects và Arrays',
            'DOM Manipulation và Events',
            'ES6+ features: let, const, template literals, destructuring',
            'Array methods: map, filter, reduce',
            'Asynchronous JavaScript: Callbacks',
            'Local Storage và Session Storage',
            'Form Validation',
            'Thực hành xây dựng Interactive Web Pages'
        ],
        outcomes: [
            'Viết JavaScript code hiệu quả',
            'Thao tác DOM để tạo tính tương tác',
            'Xử lý events và form validation',
            'Sử dụng ES6+ syntax'
        ]
    },
    'DES201': {
        name: 'UI/UX Design',
        code: 'DES201',
        credits: 3,
        duration: '45 tiết',
        objectives: 'Hiểu về thiết kế giao diện người dùng và trải nghiệm người dùng.',
        content: [
            'Nguyên lý thiết kế UI/UX',
            'User Research và User Personas',
            'Information Architecture',
            'Wireframing và Prototyping',
            'Color Theory và Typography',
            'Design Systems và Style Guides',
            'Usability Testing',
            'Tools: Figma, Adobe XD',
            'Responsive Design Principles'
        ],
        outcomes: [
            'Thiết kế giao diện user-friendly',
            'Tạo wireframes và prototypes',
            'Thực hiện user research và testing',
            'Sử dụng thành thạo công cụ thiết kế'
        ]
    },
    'GIT101': {
        name: 'Version Control với Git',
        code: 'GIT101',
        credits: 2,
        duration: '30 tiết',
        objectives: 'Quản lý code và làm việc nhóm hiệu quả với Git và GitHub.',
        content: [
            'Giới thiệu về Version Control',
            'Git basics: init, add, commit, status',
            'Branching và Merging',
            'Git workflow strategies',
            'Conflict resolution',
            'GitHub: Repository, Pull Requests, Issues',
            'Collaboration với GitHub',
            'Git best practices',
            'CI/CD cơ bản với GitHub Actions'
        ],
        outcomes: [
            'Quản lý source code với Git',
            'Làm việc nhóm hiệu quả với GitHub',
            'Giải quyết conflicts',
            'Áp dụng Git workflow trong dự án thực tế'
        ]
    },
    'JS201': {
        name: 'JavaScript nâng cao',
        code: 'JS201',
        credits: 4,
        duration: '60 tiết',
        objectives: 'Nắm vững JavaScript nâng cao và lập trình bất đồng bộ.',
        content: [
            'Advanced Functions: Closures, IIFE, Higher-Order Functions',
            'Object-Oriented Programming trong JavaScript',
            'Prototypes và Inheritance',
            'Promises và Async/Await',
            'Fetch API và AJAX',
            'Working with REST APIs',
            'Error Handling',
            'Modules: Import/Export',
            'JavaScript Design Patterns',
            'Performance Optimization'
        ],
        outcomes: [
            'Viết JavaScript code chuyên nghiệp',
            'Xử lý bất đồng bộ thành thạo',
            'Làm việc với APIs',
            'Áp dụng design patterns'
        ]
    },
    'REACT101': {
        name: 'ReactJS cơ bản',
        code: 'REACT101',
        credits: 4,
        duration: '60 tiết',
        objectives: 'Xây dựng ứng dụng web hiện đại với ReactJS.',
        content: [
            'Giới thiệu React và JSX',
            'Components và Props',
            'State và Lifecycle',
            'Event Handling trong React',
            'Lists và Keys',
            'Forms và Controlled Components',
            'React Hooks: useState, useEffect, useContext',
            'Custom Hooks',
            'React Router',
            'State Management cơ bản',
            'API Integration',
            'Build và Deploy React App'
        ],
        outcomes: [
            'Xây dựng Single Page Applications với React',
            'Sử dụng thành thạo React Hooks',
            'Quản lý state hiệu quả',
            'Tích hợp API vào React app'
        ]
    },
    'DB101': {
        name: 'Cơ sở dữ liệu',
        code: 'DB101',
        credits: 3,
        duration: '45 tiết',
        objectives: 'Thiết kế và quản lý cơ sở dữ liệu quan hệ.',
        content: [
            'Giới thiệu về Database và DBMS',
            'Relational Database Model',
            'SQL fundamentals: SELECT, INSERT, UPDATE, DELETE',
            'WHERE, ORDER BY, GROUP BY, HAVING',
            'JOINs: INNER, LEFT, RIGHT, FULL',
            'Subqueries và Nested Queries',
            'Database Design và Normalization',
            'Entity-Relationship Diagrams',
            'Indexes và Performance',
            'Transactions và ACID',
            'MySQL/PostgreSQL thực hành'
        ],
        outcomes: [
            'Thiết kế database schema hiệu quả',
            'Viết SQL queries phức tạp',
            'Tối ưu hóa database performance',
            'Quản lý và bảo trì database'
        ]
    },
    'NODE101': {
        name: 'NodeJS & ExpressJS',
        code: 'NODE101',
        credits: 4,
        duration: '60 tiết',
        objectives: 'Phát triển ứng dụng back-end với NodeJS và ExpressJS.',
        content: [
            'Giới thiệu NodeJS và NPM',
            'Modules và File System',
            'ExpressJS Framework',
            'Routing và Middleware',
            'RESTful API Design',
            'Request và Response Handling',
            'Authentication và Authorization',
            'JWT (JSON Web Tokens)',
            'Database Integration (MongoDB, MySQL)',
            'Error Handling và Logging',
            'API Security Best Practices',
            'Testing với Jest/Mocha'
        ],
        outcomes: [
            'Xây dựng RESTful APIs',
            'Kết nối và thao tác với database',
            'Implement authentication và authorization',
            'Deploy NodeJS applications'
        ]
    },
    'PHP101': {
        name: 'Lập trình PHP',
        code: 'PHP101',
        credits: 4,
        duration: '60 tiết',
        objectives: 'Phát triển web động với PHP và Laravel Framework.',
        content: [
            'PHP Basics: Syntax, Variables, Data Types',
            'Control Structures và Functions',
            'Working with Forms và Superglobals',
            'File Handling',
            'MySQL Integration với PHP',
            'Object-Oriented PHP',
            'Laravel Framework Introduction',
            'Routing và Controllers',
            'Blade Templating Engine',
            'Eloquent ORM',
            'Authentication trong Laravel',
            'Building CRUD Applications'
        ],
        outcomes: [
            'Phát triển dynamic websites với PHP',
            'Xây dựng ứng dụng với Laravel',
            'Làm việc với database trong PHP',
            'Implement authentication systems'
        ]
    },
    'SEC101': {
        name: 'Bảo mật Web',
        code: 'SEC101',
        credits: 3,
        duration: '45 tiết',
        objectives: 'Hiểu và áp dụng các kỹ thuật bảo mật web.',
        content: [
            'Web Security Fundamentals',
            'OWASP Top 10 Vulnerabilities',
            'SQL Injection và Prevention',
            'Cross-Site Scripting (XSS)',
            'Cross-Site Request Forgery (CSRF)',
            'Authentication Best Practices',
            'Session Management',
            'Password Hashing và Encryption',
            'HTTPS và SSL/TLS',
            'Security Headers',
            'API Security',
            'Penetration Testing Basics'
        ],
        outcomes: [
            'Nhận diện các lỗ hổng bảo mật phổ biến',
            'Implement security best practices',
            'Bảo vệ ứng dụng khỏi các tấn công',
            'Thực hiện security testing'
        ]
    },
    'MERN101': {
        name: 'MERN Stack',
        code: 'MERN101',
        credits: 5,
        duration: '75 tiết',
        objectives: 'Xây dựng ứng dụng full-stack với MongoDB, Express, React, NodeJS.',
        content: [
            'MERN Stack Architecture Overview',
            'MongoDB: NoSQL Database',
            'Mongoose ODM',
            'Express API Development',
            'React Front-end Integration',
            'State Management với Redux/Context API',
            'User Authentication Flow',
            'File Upload và Image Handling',
            'Real-time Features với Socket.io',
            'Payment Integration (Stripe/PayPal)',
            'Testing Full-stack Applications',
            'Deployment Strategies'
        ],
        outcomes: [
            'Xây dựng full-stack applications',
            'Kết nối front-end và back-end',
            'Implement real-time features',
            'Deploy production-ready apps'
        ]
    },
    'DEPLOY101': {
        name: 'Deploy & DevOps',
        code: 'DEPLOY101',
        credits: 3,
        duration: '45 tiết',
        objectives: 'Triển khai và quản lý ứng dụng web trên production.',
        content: [
            'Introduction to DevOps',
            'Linux Command Line Basics',
            'Web Servers: Nginx, Apache',
            'Docker Fundamentals',
            'Docker Compose',
            'Cloud Platforms: AWS, Google Cloud, Heroku',
            'Continuous Integration/Continuous Deployment (CI/CD)',
            'GitHub Actions, GitLab CI',
            'Monitoring và Logging',
            'Performance Optimization',
            'Load Balancing và Scaling',
            'Backup Strategies'
        ],
        outcomes: [
            'Deploy ứng dụng lên cloud platforms',
            'Sử dụng Docker cho containerization',
            'Setup CI/CD pipelines',
            'Monitor và maintain production apps'
        ]
    },
    'PRJ301': {
        name: 'Dự án thực tế',
        code: 'PRJ301',
        credits: 5,
        duration: '75 tiết',
        objectives: 'Áp dụng kiến thức đã học để xây dựng dự án web thực tế.',
        content: [
            'Project Planning và Requirements Analysis',
            'System Design và Architecture',
            'Database Schema Design',
            'API Design và Documentation',
            'Agile Development Methodology',
            'Sprint Planning và Task Management',
            'Version Control Best Practices',
            'Code Review và Quality Assurance',
            'Testing Strategies',
            'Documentation',
            'Presentation Skills',
            'Project Deployment'
        ],
        outcomes: [
            'Hoàn thành dự án web full-stack',
            'Làm việc theo quy trình Agile',
            'Collaborate hiệu quả trong team',
            'Present và demo sản phẩm'
        ]
    },
    'ADV301': {
        name: 'Công nghệ Web nâng cao',
        code: 'ADV301',
        credits: 4,
        duration: '60 tiết',
        objectives: 'Tìm hiểu các công nghệ web tiên tiến và xu hướng mới.',
        content: [
            'Progressive Web Apps (PWA)',
            'Service Workers và Offline Support',
            'WebSocket và Real-time Communication',
            'GraphQL API Development',
            'Server-Side Rendering (SSR) với Next.js',
            'Static Site Generation (SSG)',
            'Micro-frontends Architecture',
            'Web Assembly (WASM)',
            'Performance Optimization Techniques',
            'SEO Best Practices',
            'Web Accessibility (WCAG)',
            'Modern Build Tools: Webpack, Vite'
        ],
        outcomes: [
            'Xây dựng Progressive Web Apps',
            'Implement real-time features',
            'Tối ưu hóa performance cao cấp',
            'Áp dụng công nghệ web mới nhất'
        ]
    },
    'INTERN301': {
        name: 'Thực tập doanh nghiệp',
        code: 'INTERN301',
        credits: 5,
        duration: '8-12 tuần',
        objectives: 'Trải nghiệm làm việc thực tế tại công ty phần mềm.',
        content: [
            'Professional Work Environment',
            'Company Code Standards',
            'Working with Real Projects',
            'Team Collaboration',
            'Code Review Process',
            'Agile/Scrum Methodology',
            'Client Communication',
            'Problem Solving Skills',
            'Time Management',
            'Technical Documentation',
            'Soft Skills Development',
            'Career Development'
        ],
        outcomes: [
            'Kinh nghiệm làm việc thực tế',
            'Hiểu quy trình phát triển chuyên nghiệp',
            'Networking và career connections',
            'Soft skills improvement'
        ]
    },
    'THESIS301': {
        name: 'Đồ án tốt nghiệp',
        code: 'THESIS301',
        credits: 6,
        duration: '1 học kỳ',
        objectives: 'Thực hiện dự án cá nhân hoàn chỉnh để tốt nghiệp.',
        content: [
            'Topic Selection và Proposal',
            'Research và Literature Review',
            'System Analysis và Design',
            'Implementation',
            'Testing và Quality Assurance',
            'User Acceptance Testing',
            'Performance Benchmarking',
            'Technical Documentation',
            'User Manual',
            'Thesis Writing',
            'Presentation Preparation',
            'Defense và Q&A'
        ],
        outcomes: [
            'Hoàn thành dự án web độc lập',
            'Viết báo cáo kỹ thuật chuyên nghiệp',
            'Present và defend đồ án',
            'Portfolio project cho career'
        ]
    }
};

// Open syllabus - redirect to FPT SMS
function openSyllabus(courseId) {
    // Mở link hệ thống FPT Syllabus Management System trong tab mới
    const fptSmsUrl = 'https://fplsms.web.app/?fbclid=IwAR1zG_kI8PNf5Cbhes9YIox9Vc31S4wgkHjFyvFPl7O9J9OCGnhXdxtpiv8#!/lo/CNTT-LTWE/K213';
    window.open(fptSmsUrl, '_blank');
}

// Close syllabus modal
function closeSyllabus() {
    const modal = document.getElementById('syllabusModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('syllabusModal');
    if (event.target === modal) {
        closeSyllabus();
    }
};

// Close modal with ESC key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeSyllabus();
    }
});
