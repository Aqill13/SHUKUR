// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    // Navigation
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const menu = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu a');

    // Test Elements
    const testCards = document.querySelectorAll('.test-card');
    const testModal = document.getElementById('test-modal');
    const testTitle = document.getElementById('test-title');
    const testDescription = document.getElementById('test-description');
    const testQuestions = document.getElementById('test-questions');
    const testResults = document.getElementById('test-results');
    const testStartBtn = document.getElementById('test-start-btn');
    const testNextBtn = document.getElementById('test-next-btn');
    const testFinishBtn = document.getElementById('test-finish-btn');
    const testRestartBtn = document.getElementById('test-restart-btn');

    // Appointment Elements
    const prevMonthBtn = document.getElementById('prev-month');
    const nextMonthBtn = document.getElementById('next-month');
    const currentMonthYear = document.getElementById('current-month-year');
    const calendarDays = document.getElementById('calendar-days');
    const availableTimes = document.getElementById('available-times');
    const selectedDate = document.getElementById('selected-date');
    const selectedTime = document.getElementById('selected-time');
    const bookAppointmentBtn = document.getElementById('book-appointment');
    const appointmentForm = document.getElementById('appointment-form');
    const psychologistSelect = document.getElementById('psychologist');

    // Psychologist Elements
    const psychologistSearch = document.getElementById('psychologist-search');
    const specialtyFilter = document.getElementById('specialty-filter');
    const psychologistsGrid = document.getElementById('psychologists-grid');
    const psychologistModal = document.getElementById('psychologist-modal');

    // Article Elements
    const articleSearch = document.getElementById('article-search');
    const categoryTabs = document.querySelectorAll('.category-tab');
    const articlesGrid = document.getElementById('articles-grid');
    const articleModal = document.getElementById('article-modal');

    // Confirmation Modal
    const confirmationModal = document.getElementById('confirmation-modal');
    const confirmationName = document.getElementById('confirmation-name');
    const confirmationDate = document.getElementById('confirmation-date');
    const confirmationTime = document.getElementById('confirmation-time');
    const confirmationPsychologist = document.getElementById('confirmation-psychologist');
    const confirmationCloseBtn = document.getElementById('confirmation-close');

    // Close Modals
    const closeModalBtns = document.querySelectorAll('.close-modal');

    // -------- Mobile Menu Toggle -------- //
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            menu.classList.toggle('active');
            mobileMenuBtn.querySelector('i').classList.toggle('fa-bars');
            mobileMenuBtn.querySelector('i').classList.toggle('fa-times');
        });
    }

    // Close mobile menu when clicking on links
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('active');
            if (mobileMenuBtn.querySelector('i').classList.contains('fa-times')) {
                mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                mobileMenuBtn.querySelector('i').classList.add('fa-bars');
            }
        });
    });

    // -------- Active Navigation Link -------- //
    function setActiveLink() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                menuLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', setActiveLink);
    setActiveLink();

    // -------- Close Modals -------- //
    closeModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            testModal.style.display = 'none';
            psychologistModal.style.display = 'none';
            articleModal.style.display = 'none';
            confirmationModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });

    window.addEventListener('click', (e) => {
        if (e.target === testModal) {
            testModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (e.target === psychologistModal) {
            psychologistModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (e.target === articleModal) {
            articleModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (e.target === confirmationModal) {
            confirmationModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // -------- Psychological Tests -------- //
    // Test Data
    const tests = {
        anxiety: {
            title: 'Təşviş Testi',
            description: 'Bu test sizin təşviş səviyyənizi ölçmək üçün hazırlanmışdır. Hər sual üçün sizə ən uyğun cavabı seçin.',
            questions: [
                {
                    text: 'Tez-tez narahatlıq və ya təşviş hiss edirəm',
                    options: ['Heç vaxt', 'Bəzən', 'Tez-tez', 'Demək olar hər zaman']
                },
                {
                    text: 'Kiçik problemlər mənim üçün böyük narahatlıq yaradır',
                    options: ['Heç vaxt', 'Bəzən', 'Tez-tez', 'Demək olar hər zaman']
                },
                {
                    text: 'Yuxuda ikən narahat düşüncələr məni oyadır',
                    options: ['Heç vaxt', 'Bəzən', 'Tez-tez', 'Demək olar hər zaman']
                },
                {
                    text: 'Məni narahat edən şeylər haqqında düşünməyi dayandıra bilmirəm',
                    options: ['Heç vaxt', 'Bəzən', 'Tez-tez', 'Demək olar hər zaman']
                },
                {
                    text: 'Çox vaxt əsəbi və gərgin hiss edirəm',
                    options: ['Heç vaxt', 'Bəzən', 'Tez-tez', 'Demək olar hər zaman']
                }
            ],
            results: [
                {
                    range: [0, 5],
                    text: 'Aşağı Təşviş',
                    description: 'Təşviş səviyyəniz aşağıdır. Bu yaxşı haldır və ruh sağlamlığınızın yaxşı olduğunu göstərir.',
                    recommendations: [
                        'Mövcud stressə qarşı strategiyalarınızı davam etdirin',
                        'Müntəzəm fiziki aktivlik stressin idarə edilməsinə kömək edir',
                        'Gündəlik meditasiya təcrübəsi əlavə edin'
                    ]
                },
                {
                    range: [6, 10],
                    text: 'Orta Təşviş',
                    description: 'Orta səviyyəli təşviş yaşayırsınız. Bu, həyatın bəzi aspektlərində narahatlıq yaşadığınızı göstərir.',
                    recommendations: [
                        'Nəfəs alma və relaksasiya texnikaları öyrənin',
                        'Narahatlıq yaradan düşüncələri müəyyən etməyə çalışın',
                        'Daha çox yatmağa diqqət yetirin'
                    ]
                },
                {
                    range: [11, 15],
                    text: 'Yüksək Təşviş',
                    description: 'Təşviş səviyyəniz yüksəkdir. Bu, gündəlik həyatınıza mənfi təsir göstərə bilər.',
                    recommendations: [
                        'Peşəkar psixoloji yardım almağı nəzərdən keçirin',
                        'Koqnitiv davranış terapiyası kimi müalicə üsulları faydalı ola bilər',
                        'Gündəlik həyatınızda stressə səbəb olan amilləri azaltmağa çalışın',
                        'Dostlarınız və ailənizlə hissləriniz haqqında danışın'
                    ]
                }
            ]
        },
        depression: {
            title: 'Depressiya Testi',
            description: 'Bu test depressiya əlamətlərini ölçmək üçün hazırlanmışdır. Son iki həftə ərzində hiss etdiyiniz vəziyyətə ən uyğun cavabları seçin.',
            questions: [
                {
                    text: 'Kədərli və ya ruh düşkünlüyü hiss edirəm',
                    options: ['Heç vaxt', 'Bəzən', 'Tez-tez', 'Demək olar hər zaman']
                },
                {
                    text: 'Əvvəllər zövq aldığım fəaliyyətlərə qarşı marağımı itirmişəm',
                    options: ['Heç vaxt', 'Bəzən', 'Tez-tez', 'Demək olar hər zaman']
                },
                {
                    text: 'Yuxu problemlərim var (çox az və ya həddindən artıq yatıram)',
                    options: ['Heç vaxt', 'Bəzən', 'Tez-tez', 'Demək olar hər zaman']
                },
                {
                    text: 'Yorğunluq və ya enerji azlığı hiss edirəm',
                    options: ['Heç vaxt', 'Bəzən', 'Tez-tez', 'Demək olar hər zaman']
                },
                {
                    text: 'Özümü dəyərsiz və ya günahkar hiss edirəm',
                    options: ['Heç vaxt', 'Bəzən', 'Tez-tez', 'Demək olar hər zaman']
                }
            ],
            results: [
                {
                    range: [0, 5],
                    text: 'Minimal və ya Yox',
                    description: 'Depressiya əlamətləri minimal və ya yoxdur.',
                    recommendations: [
                        'Ruh sağlamlığınızı qorumaq üçün müntəzəm idman edin',
                        'Sosial əlaqələrinizi gücləndirin',
                        'Vaxtaşırı özünüzə qulluq tədbirləri həyata keçirin'
                    ]
                },
                {
                    range: [6, 10],
                    text: 'Yüngül Depressiya',
                    description: 'Yüngül depressiya əlamətləriniz var. Bu, həyatınızın müəyyən aspektlərinə təsir göstərə bilər.',
                    recommendations: [
                        'Gündəlik həyatınızda sevdiyiniz fəaliyyətlərə daha çox vaxt ayırın',
                        'Düşüncə jurnalı yazın və mənfi düşüncələrinizi izləyin',
                        'İdman və açıq havada daha çox vaxt keçirin'
                    ]
                },
                {
                    range: [11, 15],
                    text: 'Orta-Şiddətli Depressiya',
                    description: 'Orta və ya şiddətli depressiya əlamətləriniz var. Bu, gündəlik həyatınıza əhəmiyyətli dərəcədə təsir göstərə bilər.',
                    recommendations: [
                        'Peşəkar psixoloji yardım almağı təxirə salmayın',
                        'Təcrid olunmaqdan çəkinin və sevdiyiniz insanlarla əlaqə saxlayın',
                        'Koqnitiv davranış terapiyası kimi sübut edilmiş müalicə üsullarını nəzərdən keçirin',
                        'Gündəlik strukturlaşdırılmış fəaliyyətlər yaradın'
                    ]
                }
            ]
        },
        personality: {
            title: 'Şəxsiyyət Testi',
            description: 'Bu test şəxsiyyət xüsusiyyətlərinizi müəyyən etmək üçün hazırlanmışdır. Hər sual üçün özünüzə ən uyğun cavabı seçin.',
            questions: [
                {
                    text: 'Böyük qruplarda olmağı və yeni insanlarla tanış olmağı sevirəm',
                    options: ['Qətiyyən razı deyiləm', 'Razı deyiləm', 'Neytralam', 'Razıyam', 'Tamamilə razıyam']
                },
                {
                    text: 'Detalları diqqətlə planlaşdırmağı və təşkil etməyi üstün tuturam',
                    options: ['Qətiyyən razı deyiləm', 'Razı deyiləm', 'Neytralam', 'Razıyam', 'Tamamilə razıyam']
                },
                {
                    text: 'Adətən başqalarının hisslərini anlayıram və empatiya göstərirəm',
                    options: ['Qətiyyən razı deyiləm', 'Razı deyiləm', 'Neytralam', 'Razıyam', 'Tamamilə razıyam']
                },
                {
                    text: 'Yeni təcrübələr axtarıram və yaradıcı olmağı sevirəm',
                    options: ['Qətiyyən razı deyiləm', 'Razı deyiləm', 'Neytralam', 'Razıyam', 'Tamamilə razıyam']
                },
                {
                    text: 'Stressli vəziyyətlərdə sakit və tarazlı qalıram',
                    options: ['Qətiyyən razı deyiləm', 'Razı deyiləm', 'Neytralam', 'Razıyam', 'Tamamilə razıyam']
                }
            ],
            results: [
                {
                    range: [5, 12],
                    text: 'İntrovert və Struktur Seven',
                    description: 'Siz daha çox introvert və planlı bir insansınız. Detallara diqqət yetirməyi və təkbaşına işləməyi sevirsiniz.',
                    recommendations: [
                        'Təkbaşına işləyə biləcəyiniz layihələr seçin',
                        'Planlı və strukturlaşdırılmış fəaliyyətlərdə iştirak edin',
                        'Özünüzə qulluq üçün sakit vaxtlar ayırın'
                    ]
                },
                {
                    range: [13, 17],
                    text: 'Balanslaşdırılmış',
                    description: 'Şəxsiyyətiniz tarazlıdır. Həm sosial, həm də fərdi fəaliyyətlərdən zövq alırsınız və müxtəlif vəziyyətlərə uyğunlaşa bilirsiniz.',
                    recommendations: [
                        'Şəxsi maraqlarınızı kəşf etməyə davam edin',
                        'Həm sosial, həm də fərdi fəaliyyətlər arasında tarazlıq yaradın',
                        'Müxtəlif mühitlərdə uyğunlaşma qabiliyyətinizdən istifadə edin'
                    ]
                },
                {
                    range: [18, 25],
                    text: 'Ekstrovert və Yaradıcı',
                    description: 'Siz daha çox ekstrovert və yaradıcı bir insansınız. İnsanlarla olmağı və yeni təcrübələr yaşamağı sevirsiniz.',
                    recommendations: [
                        'Komanda layihələrində iştirak edin',
                        'Yaradıcı fəaliyyətlər və yeni təcrübələr axtarın',
                        'Sosial şəbəkənizi genişləndirin və müxtəlif insanlarla əlaqə qurun'
                    ]
                }
            ]
        },
        stress: {
            title: 'Stress Testi',
            description: 'Bu test stress səviyyənizi ölçmək üçün hazırlanmışdır. Son ay ərzində hiss etdiyiniz vəziyyətə ən uyğun cavabları seçin.',
            questions: [
                {
                    text: 'Həyatımda baş verən hadisələr üzərində nəzarətin olmamasını hiss edirəm',
                    options: ['Heç vaxt', 'Nadir hallarda', 'Bəzən', 'Tez-tez', 'Çox tez-tez']
                },
                {
                    text: 'Öhdəliklərimin öhdəsindən gələ bilmədiyimi hiss edirəm',
                    options: ['Heç vaxt', 'Nadir hallarda', 'Bəzən', 'Tez-tez', 'Çox tez-tez']
                },
                {
                    text: 'Əsəbi və ya gərgin hiss edirəm',
                    options: ['Heç vaxt', 'Nadir hallarda', 'Bəzən', 'Tez-tez', 'Çox tez-tez']
                },
                {
                    text: 'Narahatlıq edən şeylərlə başa çıxmaqda çətinlik çəkirəm',
                    options: ['Heç vaxt', 'Nadir hallarda', 'Bəzən', 'Tez-tez', 'Çox tez-tez']
                },
                {
                    text: 'Çox şey üçün narahatam',
                    options: ['Heç vaxt', 'Nadir hallarda', 'Bəzən', 'Tez-tez', 'Çox tez-tez']
                }
            ],
            results: [
                {
                    range: [0, 8],
                    text: 'Aşağı Stress',
                    description: 'Stress səviyyəniz aşağıdır. Ehtimal ki, həyatınızdakı tələbləri yaxşı idarə edirsiniz.',
                    recommendations: [
                        'Stresslə mübarizə strategiyalarınızı davam etdirin',
                        'Müntəzəm fiziki aktivliyə davam edin',
                        'Sağlam həyat tərzini davam etdirin'
                    ]
                },
                {
                    range: [9, 16],
                    text: 'Orta Stress',
                    description: 'Orta səviyyəli stress yaşayırsınız. Bu, həyatınızın bəzi sahələrində təzyiq hiss etdiyinizi göstərir.',
                    recommendations: [
                        'Stress yaradan amilləri müəyyən edin və onları azaltmağa çalışın',
                        'Relaksasiya texnikaları və nəfəs alma məşqləri öyrənin',
                        'Sevdiyiniz fəaliyyətlərə daha çox vaxt ayırın',
                        'Yuxu keyfiyyətinizi yaxşılaşdırın'
                    ]
                },
                {
                    range: [17, 20],
                    text: 'Yüksək Stress',
                    description: 'Stress səviyyəniz yüksəkdir. Bu, həyatınızın müxtəlif sahələrinə mənfi təsir göstərə bilər.',
                    recommendations: [
                        'Peşəkar yardım almağı nəzərdən keçirin',
                        'Gündəlik həyatınızda prioritetləşdirmə və hədlər qoymağı öyrənin',
                        'Meditasiya və ya mindfulness təcrübələrini həyatınıza daxil edin',
                        'İdman və sağlam qidalanmağa diqqət yetirin',
                        'Sosial dəstək şəbəkənizi genişləndirin'
                    ]
                }
            ]
        }
    };

    // Current test state
    let currentTest = null;
    let currentQuestionIndex = 0;
    let userAnswers = [];

    // Test Start
    testCards.forEach(card => {
        const testType = card.dataset.test;
        const startButton = card.querySelector('.start-test');

        startButton.addEventListener('click', () => {
            openTest(testType);
        });
    });

    function openTest(testType) {
        currentTest = tests[testType];
        currentQuestionIndex = 0;
        userAnswers = [];

        // Reset test UI
        testTitle.textContent = currentTest.title;
        testDescription.innerHTML = `<p>${currentTest.description}</p>`;
        testQuestions.innerHTML = '';
        testResults.innerHTML = '';
        testResults.classList.add('hidden');

        // Show start button, hide others
        testStartBtn.classList.remove('hidden');
        testNextBtn.classList.add('hidden');
        testFinishBtn.classList.add('hidden');
        testRestartBtn.classList.add('hidden');

        // Show modal
        testModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    // Test navigation
    testStartBtn.addEventListener('click', startTest);
    testNextBtn.addEventListener('click', nextQuestion);
    testFinishBtn.addEventListener('click', finishTest);
    testRestartBtn.addEventListener('click', restartTest);

    function startTest() {
        testDescription.classList.add('hidden');
        testStartBtn.classList.add('hidden');
        testQuestions.classList.remove('hidden');
        showQuestion(0);
        testNextBtn.classList.remove('hidden');
    }

    function showQuestion(index) {
        testQuestions.innerHTML = '';
        const question = currentTest.questions[index];
        
        const questionEl = document.createElement('div');
        questionEl.classList.add('question');
        
        const questionText = document.createElement('p');
        questionText.textContent = `${index + 1}. ${question.text}`;
        questionEl.appendChild(questionText);
        
        const options = document.createElement('div');
        options.classList.add('options');
        
        question.options.forEach((option, i) => {
            const optionEl = document.createElement('div');
            optionEl.classList.add('option');
            optionEl.textContent = option;
            optionEl.dataset.value = i;
            
            // Check if this option was previously selected
            if (userAnswers[index] !== undefined && userAnswers[index] === i) {
                optionEl.classList.add('selected');
            }
            
            optionEl.addEventListener('click', () => {
                // Remove selected class from all options
                options.querySelectorAll('.option').forEach(opt => {
                    opt.classList.remove('selected');
                });
                
                // Add selected class to clicked option
                optionEl.classList.add('selected');
                
                // Save answer
                userAnswers[index] = i;
                
                // Enable next/finish button
                if (index === currentTest.questions.length - 1) {
                    testFinishBtn.disabled = false;
                } else {
                    testNextBtn.disabled = false;
                }
            });
            
            options.appendChild(optionEl);
        });
        
        questionEl.appendChild(options);
        testQuestions.appendChild(questionEl);
        
        // Update current question index
        currentQuestionIndex = index;
        
        // Show finish button on last question
        if (index === currentTest.questions.length - 1) {
            testNextBtn.classList.add('hidden');
            testFinishBtn.classList.remove('hidden');
        }
    }

    function nextQuestion() {
        if (currentQuestionIndex < currentTest.questions.length - 1) {
            showQuestion(currentQuestionIndex + 1);
        }
    }

    function finishTest() {
        // Calculate score
        let score = 0;
        userAnswers.forEach(answer => {
            score += answer;
        });
        
        // Find appropriate result
        let result = null;
        for (const res of currentTest.results) {
            if (score >= res.range[0] && score <= res.range[1]) {
                result = res;
                break;
            }
        }
        
        // Show results
        testQuestions.classList.add('hidden');
        testFinishBtn.classList.add('hidden');
        testResults.classList.remove('hidden');
        testRestartBtn.classList.remove('hidden');
        
        testResults.innerHTML = `
            <h3>${result.text}</h3>
            <div class="result-score">${score} / ${currentTest.questions.length * (currentTest.questions[0].options.length - 1)}</div>
            <div class="result-description">${result.description}</div>
            <div class="result-recommendations">
                <h4>Tövsiyələr:</h4>
                <ul>
                    ${result.recommendations.map(rec => `<li>${rec}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    function restartTest() {
        userAnswers = [];
        testResults.classList.add('hidden');
        testRestartBtn.classList.add('hidden');
        testDescription.classList.remove('hidden');
        testStartBtn.classList.remove('hidden');
    }

    // -------- Calendar & Appointment -------- //
    // Calendar variables
    let currentDate = new Date();
    let selectedDayEl = null;
    let selectedTimeEl = null;
    let appointmentDetails = {
        date: null,
        time: null,
        psychologist: null
    };

    // Generate available time slots
    const generateTimeSlots = () => {
        const times = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00'];
        // Randomly make some slots unavailable
        return times.map(time => {
            return {
                time,
                available: Math.random() > 0.3 // 70% chance of being available
            };
        });
    };

    // Initialize calendar
    const initCalendar = () => {
        updateCalendarHeader();
        renderCalendar();
        
        // Event listeners for month navigation
        prevMonthBtn.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() - 1);
            updateCalendarHeader();
            renderCalendar();
        });
        
        nextMonthBtn.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() + 1);
            updateCalendarHeader();
            renderCalendar();
        });
    };

    // Update calendar header
    const updateCalendarHeader = () => {
        const months = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'İyun', 'İyul', 'Avqust', 'Sentyabr', 'Oktyabr', 'Noyabr', 'Dekabr'];
        currentMonthYear.textContent = `${months[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
    };

    // Render calendar days
    const renderCalendar = () => {
        calendarDays.innerHTML = '';
        
        const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
        const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
        const today = new Date();
        
        // Add empty cells for days before the first day of the month
        const firstDayIndex = (firstDayOfMonth.getDay() + 6) % 7; // Adjust for Monday as first day
        for (let i = 0; i < firstDayIndex; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.classList.add('day', 'empty');
            calendarDays.appendChild(emptyDay);
        }
        
        // Add days of the month
        for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
            const day = document.createElement('div');
            day.classList.add('day');
            day.textContent = i;
            
            const dateToCheck = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
            
            // Check if day is in the past
            if (dateToCheck < new Date(today.getFullYear(), today.getMonth(), today.getDate())) {
                day.classList.add('past');
            } else {
                // Add click event for future dates
                day.addEventListener('click', () => {
                    if (selectedDayEl) {
                        selectedDayEl.classList.remove('selected');
                    }
                    day.classList.add('selected');
                    selectedDayEl = day;
                    
                    // Update selected date
                    const selectedDateObj = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
                    const options = { year: 'numeric', month: 'long', day: 'numeric' };
                    const formattedDate = selectedDateObj.toLocaleDateString('az-AZ', options);
                    selectedDate.textContent = formattedDate;
                    appointmentDetails.date = formattedDate;
                    
                    // Generate time slots for this day
                    renderTimeSlots();
                    
                    // Check if booking can be enabled
                    checkBookingEligibility();
                });
            }
            
            // Check if day is today
            if (dateToCheck.getDate() === today.getDate() && 
                dateToCheck.getMonth() === today.getMonth() && 
                dateToCheck.getFullYear() === today.getFullYear()) {
                day.classList.add('today');
            }
            
            calendarDays.appendChild(day);
        }
    };

    // Render time slots
    const renderTimeSlots = () => {
        availableTimes.innerHTML = '';
        
        const timeSlots = generateTimeSlots();
        
        timeSlots.forEach(slot => {
            const timeSlot = document.createElement('div');
            timeSlot.classList.add('time-slot');
            if (!slot.available) {
                timeSlot.classList.add('booked');
            }
            timeSlot.textContent = slot.time;
            
            if (slot.available) {
                timeSlot.addEventListener('click', () => {
                    if (selectedTimeEl) {
                        selectedTimeEl.classList.remove('selected');
                    }
                    timeSlot.classList.add('selected');
                    selectedTimeEl = timeSlot;
                    
                    // Update selected time
                    selectedTime.textContent = slot.time;
                    appointmentDetails.time = slot.time;
                    
                    // Check if booking can be enabled
                    checkBookingEligibility();
                });
            }
            
            availableTimes.appendChild(timeSlot);
        });
    };

    // Check if booking button can be enabled
    const checkBookingEligibility = () => {
        if (appointmentDetails.date && appointmentDetails.time && psychologistSelect.value) {
            bookAppointmentBtn.disabled = false;
        } else {
            bookAppointmentBtn.disabled = true;
        }
    };

    // Handle appointment form submission
    appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(appointmentForm);
        const name = formData.get('name');
        const psychologistId = formData.get('psychologist');
        const psychologistName = psychologistSelect.options[psychologistSelect.selectedIndex].text;
        
        // Show confirmation modal
        confirmationName.textContent = name;
        confirmationDate.textContent = appointmentDetails.date;
        confirmationTime.textContent = appointmentDetails.time;
        confirmationPsychologist.textContent = psychologistName;
        
        confirmationModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    // Handle psychologist select change
    psychologistSelect.addEventListener('change', () => {
        appointmentDetails.psychologist = psychologistSelect.value;
        checkBookingEligibility();
    });

    // Close confirmation modal and reset form
    confirmationCloseBtn.addEventListener('click', () => {
        confirmationModal.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // Reset form
        appointmentForm.reset();
        if (selectedDayEl) {
            selectedDayEl.classList.remove('selected');
            selectedDayEl = null;
        }
        if (selectedTimeEl) {
            selectedTimeEl.classList.remove('selected');
            selectedTimeEl = null;
        }
        selectedDate.textContent = 'Seçilməyib';
        selectedTime.textContent = 'Seçilməyib';
        appointmentDetails = {
            date: null,
            time: null,
            psychologist: null
        };
        bookAppointmentBtn.disabled = true;
        availableTimes.innerHTML = '';
    });

    // -------- Psychologists -------- //
    // Psychologists data
    const psychologists = [
        {
            id: 1,
            name: 'Dr. Aynur Əliyeva',
            specialty: 'Klinik Psixologiya',
            specialtyKey: 'clinical',
            image: 'https://images.pexels.com/photos/5699516/pexels-photo-5699516.jpeg',
            rating: 4.9,
            bio: 'Dr. Aynur Əliyeva 15 illik təcrübəyə malik klinik psixoloqdur. O, depressiya, təşviş pozuntuları və travma sonrası stress pozuntusu sahəsində ixtisaslaşıb.',
            education: 'Bakı Dövlət Universitetində psixologiya üzrə bakalavr və magistr dərəcəsi almışdır. Daha sonra ABŞ-da klinik psixologiya üzrə doktorluq dərəcəsi əldə etmişdir.',
            experience: '15 il ərzində müxtəlif klinikalarda və özəl praktikada çalışmışdır. Depressiya və təşviş pozuntuları sahəsində tədqiqatçı kimi də fəaliyyət göstərir.'
        },
        {
            id: 2,
            name: 'Elşən Məmmədov',
            specialty: 'Uşaq Psixologiyası',
            specialtyKey: 'child',
            image: 'https://images.pexels.com/photos/5998880/pexels-photo-5998880.jpeg',
            rating: 4.7,
            bio: 'Elşən Məmmədov uşaq psixologiyası sahəsində 10 ildən artıq təcrübəsi olan mütəxəssisdir. O, uşaqlarda davranış pozuntuları, diqqət çatışmazlığı və hiperaktivlik pozuntusu (ADHD) və təhsil problemləri ilə işləyir.',
            education: 'Azərbaycan Dövlət Pedaqoji Universitetində uşaq psixologiyası üzrə təhsil almışdır. Türkiyədə uşaq psixologiyası üzrə ixtisaslaşma kursları keçmişdir.',
            experience: 'Bakıda müxtəlif məktəblərdə psixoloq kimi çalışmış, hazırda özəl praktika ilə məşğuldur. Uşaq inkişafı və tərbiyəsi mövzusunda mütəmadi seminarlar keçirir.'
        },
        {
            id: 3,
            name: 'Leyla Hüseynova',
            specialty: 'Ailə Psixologiyası',
            specialtyKey: 'family',
            image: 'https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg',
            rating: 4.8,
            bio: 'Leyla Hüseynova ailə münasibətləri və cütlük terapiyası sahəsində ixtisaslaşmış psixoloqdur. O, ailə münaqişələri, boşanma halları və valideyn-uşaq münasibətlərinin yaxşılaşdırılması ilə məşğul olur.',
            education: 'Moskva Dövlət Universitetində psixologiya təhsili almış, daha sonra İstanbulda ailə terapiyası üzrə ixtisaslaşmışdır.',
            experience: 'Ailə Məsləhət Mərkəzində 8 il çalışmış, hazırda özəl praktika ilə məşğuldur. Ailə münasibətləri mövzusunda kitab müəllifidir.'
        },
        {
            id: 4,
            name: 'Anar Həsənov',
            specialty: 'Koqnitiv Psixologiya',
            specialtyKey: 'cognitive',
            image: 'https://images.pexels.com/photos/5046546/pexels-photo-5046546.jpeg',
            rating: 4.6,
            bio: 'Anar Həsənov koqnitiv davranış terapiyası sahəsində mütəxəssisdir. O, fobiyalar, obsessiv-kompulsiv pozuntu və travma sonrası stress pozuntusu müalicəsində koqnitiv yanaşmalardan istifadə edir.',
            education: 'Bakı Dövlət Universitetində psixologiya üzrə təhsil almış, Almaniyada koqnitiv davranış terapiyası üzrə təlim keçmişdir.',
            experience: 'Müxtəlif klinikalarda 7 il çalışmış, hazırda özəl praktika ilə məşğuldur. Koqnitiv davranış terapiyası üzrə mütəmadi təlimlər keçirir.'
        },
        {
            id: 5,
            name: 'Nigar Quliyeva',
            specialty: 'Klinik Psixologiya',
            specialtyKey: 'clinical',
            image: 'https://images.pexels.com/photos/6749773/pexels-photo-6749773.jpeg',
            rating: 4.5,
            bio: 'Nigar Quliyeva depressiya, təşviş və stress pozuntuları üzrə ixtisaslaşmış klinik psixoloqdur. O, holistik yanaşma tərəfdarıdır və terapiya zamanı müxtəlif metodlardan istifadə edir.',
            education: 'İstanbul Universitetində klinik psixologiya üzrə magistr dərəcəsi almışdır. Müxtəlif psixoterapiya metodları üzrə sertifikatlaşdırılmışdır.',
            experience: '9 il ərzində klinik psixoloq kimi çalışmışdır. Stress idarəetmə proqramlarının hazırlanmasında iştirak etmişdir.'
        },
        {
            id: 6,
            name: 'Tural Məmmədli',
            specialty: 'Uşaq Psixologiyası',
            specialtyKey: 'child',
            image: 'https://images.pexels.com/photos/4098342/pexels-photo-4098342.jpeg',
            rating: 4.7,
            bio: 'Tural Məmmədli uşaq və yeniyetmə psixologiyası sahəsində ixtisaslaşmışdır. O, autizm spektr pozuntuları, öyrənmə çətinlikləri və davranış problemləri olan uşaqlarla işləyir.',
            education: 'Türkiyədə uşaq psixologiyası və inkişaf psixologiyası üzrə təhsil almışdır. Autizm spektr pozuntuları üzrə xüsusi təlimlər keçmişdir.',
            experience: 'Bakıda inklüziv təhsil mərkəzində 6 il çalışmışdır. Xüsusi ehtiyacları olan uşaqlarla işləmək üçün müxtəlif metodologiyalar üzrə təlimçidir.'
        },
        {
            id: 7,
            name: 'Səbinə Əhmədova',
            specialty: 'Ailə Psixologiyası',
            specialtyKey: 'family',
            image: 'https://images.pexels.com/photos/6354367/pexels-photo-6354367.jpeg',
            rating: 4.9,
            bio: 'Səbinə Əhmədova ailə münasibətləri və nikah terapiyası sahəsində 12 illik təcrübəyə malikdir. O, münaqişələrin həlli, ünsiyyət problemləri və emosional yaxınlığın artırılması üzrə ixtisaslaşmışdır.',
            education: 'Azərbaycan Dövlət Universitetində psixologiya üzrə təhsil almış, daha sonra ABŞ-da ailə terapiyası üzrə ixtisaslaşmışdır.',
            experience: 'Ailə Psixologiya Mərkəzinin təsisçisi və rəhbəridir. Ailə psixologiyası sahəsində bir neçə kitabın müəllifidir və televiziya proqramlarında ekspert kimi iştirak edir.'
        },
        {
            id: 8,
            name: 'Rəşad Hüseynov',
            specialty: 'Koqnitiv Psixologiya',
            specialtyKey: 'cognitive',
            image: 'https://images.pexels.com/photos/5952651/pexels-photo-5952651.jpeg',
            rating: 4.6,
            bio: 'Rəşad Hüseynov koqnitiv-davranış terapiyası və mindfulness əsaslı stress azaldılması sahəsində ixtisaslaşmışdır. O, xroniki stress, yuxu pozuntuları və həyəcan pozuntuları üzrə mütəxəssisdir.',
            education: 'Londonda psixologiya üzrə təhsil almış və koqnitiv davranış terapiyası üzrə ixtisaslaşmışdır.',
            experience: 'Korporativ sektorda stress idarəetmə proqramları üzrə konsultant kimi 10 il çalışmışdır. Hazırda özəl praktika ilə məşğuldur və onlayn kurslar hazırlayır.'
        }
    ];

    // Initialize psychologists
    const initPsychologists = () => {
        renderPsychologists(psychologists);
        populatePsychologistSelect();
        
        // Search and filter functionality
        psychologistSearch.addEventListener('input', filterPsychologists);
        specialtyFilter.addEventListener('change', filterPsychologists);
    };

    // Render psychologists
    const renderPsychologists = (filteredList) => {
        psychologistsGrid.innerHTML = '';
        
        filteredList.forEach(psychologist => {
            const card = document.createElement('div');
            card.classList.add('psychologist-card');
            card.dataset.id = psychologist.id;
            
            card.innerHTML = `
                <div class="psychologist-image">
                    <img src="${psychologist.image}" alt="${psychologist.name}">
                </div>
                <div class="psychologist-content">
                    <h3>${psychologist.name}</h3>
                    <p class="psychologist-specialty">${psychologist.specialty}</p>
                    <div class="rating">
                        ${generateStars(psychologist.rating)}
                    </div>
                    <button class="btn primary view-profile" data-id="${psychologist.id}">Profili Göstər</button>
                </div>
            `;
            
            psychologistsGrid.appendChild(card);
        });
        
        // Add event listeners to view profile buttons
        document.querySelectorAll('.view-profile').forEach(button => {
            button.addEventListener('click', () => {
                const id = parseInt(button.dataset.id);
                openPsychologistProfile(id);
            });
        });
    };

    // Generate star rating
    const generateStars = (rating) => {
        let stars = '';
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        
        if (halfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }
        
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star"></i>';
        }
        
        return stars + ` <span>(${rating})</span>`;
    };

    // Filter psychologists
    const filterPsychologists = () => {
        const searchTerm = psychologistSearch.value.toLowerCase();
        const specialty = specialtyFilter.value;
        
        const filtered = psychologists.filter(psychologist => {
            const nameMatch = psychologist.name.toLowerCase().includes(searchTerm);
            const specialtyMatch = !specialty || psychologist.specialtyKey === specialty;
            
            return nameMatch && specialtyMatch;
        });
        
        renderPsychologists(filtered);
    };

    // Open psychologist profile
    const openPsychologistProfile = (id) => {
        const psychologist = psychologists.find(p => p.id === id);
        
        if (psychologist) {
            document.getElementById('modal-psychologist-img').src = psychologist.image;
            document.getElementById('modal-psychologist-name').textContent = psychologist.name;
            document.getElementById('modal-psychologist-specialty').textContent = psychologist.specialty;
            document.getElementById('modal-psychologist-rating').innerHTML = generateStars(psychologist.rating);
            
            document.getElementById('modal-psychologist-bio').innerHTML = `
                <h4>Haqqında</h4>
                <p>${psychologist.bio}</p>
            `;
            
            document.getElementById('modal-psychologist-education').innerHTML = `
                <h4>Təhsil</h4>
                <p>${psychologist.education}</p>
            `;
            
            document.getElementById('modal-psychologist-experience').innerHTML = `
                <h4>Təcrübə</h4>
                <p>${psychologist.experience}</p>
            `;
            
            // Show modal
            psychologistModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            // Handle book appointment button
            const bookButton = document.querySelector('.book-with-psychologist');
            bookButton.addEventListener('click', () => {
                psychologistModal.style.display = 'none';
                document.body.style.overflow = 'auto';
                
                // Select this psychologist in the appointment form
                psychologistSelect.value = psychologist.id;
                appointmentDetails.psychologist = psychologist.id;
                checkBookingEligibility();
                
                // Scroll to appointment section
                document.querySelector('#appointment').scrollIntoView({ behavior: 'smooth' });
            });
        }
    };

    // Populate psychologist select in appointment form
    const populatePsychologistSelect = () => {
        psychologists.forEach(psychologist => {
            const option = document.createElement('option');
            option.value = psychologist.id;
            option.textContent = psychologist.name;
            psychologistSelect.appendChild(option);
        });
    };

    // -------- Articles -------- //
    // Articles data
    const articles = [
        {
            id: 1,
            title: 'Təşviş ilə mübarizə: Gündəlik həyatınızı yaxşılaşdırmaq üçün strategiyalar',
            category: 'anxiety',
            categoryName: 'Təşviş',
            author: 'Dr. Aynur Əliyeva',
            date: '15 May, 2025',
            image: 'https://images.pexels.com/photos/3808008/pexels-photo-3808008.jpeg',
            excerpt: 'Təşviş müasir həyatın bir hissəsidir, lakin onu idarə etməyin yolları var. Bu məqalədə təşvişi azaltmaq üçün praktik strategiyalar təqdim edirik.',
            content: `
                <p>Təşviş və narahatlıq hissi müasir həyatımızın ayrılmaz hissəsinə çevrilib. Sürətli həyat tempi, iş yükü, şəxsi münasibətlər və sosial media təzyiqi - bunların hamısı bizim təşviş səviyyəmizə təsir göstərir. Ancaq yaxşı xəbər odur ki, təşviş idarə oluna bilər və bu, sizin gündəlik həyat keyfiyyətinizi əhəmiyyətli dərəcədə yaxşılaşdıra bilər.</p>
                
                <h3>Təşviş nədir və niyə yaranır?</h3>
                
                <p>Təşviş əslində təhlükə və ya təhdid qarşısında normal bir reaksiyadır. Bu, bizim "döyüş və ya qaç" mexanizmimizin bir hissəsidir və keçmişdə həyatda qalmağımıza kömək edib. Problem odur ki, müasir həyatda fiziki təhlükələr az olsa da, beyinimiz çox vaxt sosial təhdidlərə, maliyyə narahatlıqlarına və ya gələcəklə bağlı qeyri-müəyyənliyə eyni şəkildə reaksiya verir.</p>
                
                <p>Xroniki təşviş uzun müddət davam etdikdə fiziki və emosional sağlamlığımıza ciddi təsir göstərə bilər: yuxu pozuntuları, baş ağrıları, əzələ gərginliyi, həzm problemləri və hətta immunitet sisteminin zəifləməsi.</p>
                
                <h3>Təşvişlə mübarizə strategiyaları</h3>
                
                <p><strong>1. Nəfəs alma texnikaları</strong> - Dərin nəfəs alma təşviş vəziyyətində olan sinir sistemini sakitləşdirməyin ən sürətli yollarından biridir. 4-7-8 nəfəs texnikası xüsusilə effektivdir: 4 saniyə nəfəs alın, 7 saniyə saxlayın və 8 saniyə nəfəs verin. Bu, simpatik sinir sisteminin aktivliyini azaldır və parasimpatik sinir sistemini aktivləşdirir.</p>
                
                <p><strong>2. Mindfulness və meditasiya</strong> - Gündəlik 10-15 dəqiqəlik meditasiya təcrübəsi beyindəki təşviş mərkəzlərinin aktivliyini azaltdığı sübut edilmişdir. Mindfulness sizə indiki anda qalmağı və narahatedici düşüncələrdən uzaqlaşmağı öyrədir.</p>
                
                <p><strong>3. Fiziki aktivlik</strong> - Müntəzəm idman stress hormonlarını azaldır və endorfin ifrazını artırır. Həftədə ən azı 150 dəqiqə orta intensivlikli fiziki aktivlik tövsiyə olunur.</p>
                
                <p><strong>4. Yuxu gigiyenası</strong> - Yuxu və təşviş bir-biri ilə sıx bağlıdır. Keyfiyyətli yuxu üçün: müntəzəm yatma qrafiki yaradın, yatmazdan əvvəl ekranlardan uzaq durun, yataq otağınızı qaranlıq, səssiz və sərin saxlayın.</p>
                
                <p><strong>5. Koqnitiv yenidənqurma</strong> - Bu, mənfi və ya qeyri-realistik düşüncə nümunələrini müəyyən etmək və onları daha realistik, faydalı olanlarla əvəz etmək prosesidir. "Ya olmazsa..." tipli düşüncələri müəyyən edin və onları faktlara əsaslanan düşüncələrlə əvəz edin.</p>
                
                <h3>Nə zaman peşəkar yardım axtarmalı?</h3>
                
                <p>Əgər təşviş gündəlik həyatınıza mane olursa, normal fəaliyyətlərinizi yerinə yetirməyə çətinlik çəkirsinizsə və ya yuxarıdakı strategiyalar kömək etmirsə, peşəkar psixoloji yardım axtarmaq vacibdir. Koqnitiv davranış terapiyası təşviş pozuntuları üçün çox effektiv müalicə üsuludur.</p>
                
                <p>Yadda saxlayın ki, yardım istəmək güc əlamətidir, zəiflik deyil. Təşvişinizi idarə etməyi öyrənmək həyatınızın keyfiyyətini əhəmiyyətli dərəcədə yaxşılaşdıra bilər.</p>
            `
        },
        {
            id: 2,
            title: 'Depressiya əlamətləri və müalicə yolları',
            category: 'depression',
            categoryName: 'Depressiya',
            author: 'Dr. Nigar Quliyeva',
            date: '10 May, 2025',
            image: 'https://images.pexels.com/photos/4101142/pexels-photo-4101142.jpeg',
            excerpt: 'Depressiya sadəcə kədər deyil. Bu məqalədə depressiya əlamətlərini tanımağı və onunla mübarizə aparmağı öyrənəcəksiniz.',
            content: `
                <p>Depressiya dünyada ən geniş yayılmış psixi sağlamlıq problemlərindən biridir və təəssüf ki, çox vaxt düzgün diaqnoz qoyulmur və müalicə edilmir. Sadəcə kədərli olmaqdan fərqli olaraq, depressiya uzunmüddətli, intensiv emosional vəziyyətdir ki, gündəlik həyatımıza əhəmiyyətli dərəcədə təsir göstərir.</p>
                
                <h3>Depressiyanın əlamətləri</h3>
                
                <p>Depressiya hər kəsdə fərqli şəkildə özünü göstərə bilər, lakin ən çox rast gəlinən əlamətlər bunlardır:</p>
                
                <p><strong>Emosional əlamətlər:</strong></p>
                <ul>
                    <li>Davamlı kədər, təşviş və ya "boşluq" hissi</li>
                    <li>Ümidsizlik və ya pessimizm</li>
                    <li>Günahkarlıq, dəyərsizlik və ya köməksizlik hissi</li>
                    <li>Əvvəllər zövq aldığınız fəaliyyətlərə qarşı marağın və ya həzzin itirilməsi</li>
                    <li>Konsentrasiya, qərar qəbul etmə və ya xatırlama çətinlikləri</li>
                    <li>Ölüm və ya intihar haqqında düşüncələr</li>
                </ul>
                
                <p><strong>Fiziki əlamətlər:</strong></p>
                <ul>
                    <li>Enerji azlığı və davamlı yorğunluq</li>
                    <li>Yuxu problemləri - həddindən artıq yatmaq və ya yuxusuzluq</li>
                    <li>İştahda dəyişikliklər - çəki artımı və ya çəki itkisi</li>
                    <li>Yavaş hərəkətlər və ya danışıq</li>
                    <li>Səbəbsiz baş və əzələ ağrıları</li>
                </ul>
                
                <h3>Depressiyanın səbəbləri</h3>
                
                <p>Depressiya adətən bir neçə faktorun kombinasiyasının nəticəsidir:</p>
                
                <p><strong>Bioloji faktorlar:</strong> Beyin kimyası və hormonlardakı dəyişikliklər, genetik meyillilik</p>
                
                <p><strong>Psixoloji faktorlar:</strong> Aşağı özünəinam, pessimistik düşüncə tərzi, erkən uşaqlıq travması</p>
                
                <p><strong>Sosial və ətraf mühit faktorları:</strong> Uzunmüddətli stress, sevdiyiniz birinin itkisi, münasibət problemləri, maliyyə çətinlikləri</p>
                
                <h3>Depressiya ilə mübarizə yolları</h3>
                
                <p><strong>1. Peşəkar yardım almaq</strong> - Depressiya müalicə oluna bilən bir vəziyyətdir. Psixoterapiya (xüsusilə koqnitiv davranış terapiyası), dərman müalicəsi və ya bunların kombinasiyası çox effektiv ola bilər.</p>
                
                <p><strong>2. Həyat tərzində dəyişikliklər</strong></p>
                <ul>
                    <li>Müntəzəm fiziki aktivlik - hətta gündəlik 30 dəqiqəlik gəzinti belə beyin kimyasını yaxşılaşdıra bilər</li>
                    <li>Balanslaşdırılmış qidalanma - B vitaminləri, Omega-3 yağ turşuları və antioksidantlarla zəngin qidalar</li>
                    <li>Yuxu rejiminin tənzimlənməsi</li>
                    <li>Alkoqol və narkotik maddələrdən uzaq durmaq</li>
                </ul>
                
                <p><strong>3. Sosial dəstək</strong> - Təcrid olunmaq depressiyanı daha da ağırlaşdıra bilər. Ailənizdən və dostlarınızdan dəstək istəyin, dəstək qruplarına qoşulun.</p>
                
                <p><strong>4. Stress idarəetmə texnikaları</strong> - Meditasiya, dərin nəfəs alma, yoga və mindfulness təcrübələri faydalı ola bilər.</p>
                
                <p><strong>5. Məqsədlər təyin etmək</strong> - Kiçik, əldə edilə bilən məqsədlər təyin edin və onlara çatdıqca özünüzü mükafatlandırın.</p>
                
                <h3>Sevdiyiniz birində depressiya əlamətləri görürsünüzsə</h3>
                
                <p>Onları dinləyin, mühakimə etmədən dəstək olun və peşəkar yardım almağa təşviq edin. Depressiya zamanı ən çətin addımlardan biri yardım istəməkdir.</p>
                
                <p>Yadda saxlayın: Depressiya zəiflik deyil və bu, sizin günahınız deyil. Bu, müalicə oluna bilən tibbi vəziyyətdir və yardım istəmək güc əlamətidir.</p>
            `
        },
        {
            id: 3,
            title: 'Sağlam münasibətlərin sirri: Effektiv ünsiyyət bacarıqları',
            category: 'relationships',
            categoryName: 'Münasibətlər',
            author: 'Leyla Hüseynova',
            date: '5 May, 2025',
            image: 'https://images.pexels.com/photos/4629633/pexels-photo-4629633.jpeg',
            excerpt: 'Sağlam və uzunmüddətli münasibətlərin əsasında effektiv ünsiyyət dayanır. Bu məqalədə münasibətlərinizi gücləndirmək üçün ünsiyyət bacarıqlarını necə inkişaf etdirəcəyinizi öyrənin.',
            content: `
                <p>Sağlam və uzunmüddətli münasibətlərin təməlində effektiv ünsiyyət dayanır. İstər romantik münasibətlər, istər ailə münasibətləri, istərsə də dostluq və iş münasibətləri olsun, ünsiyyət bacarıqları olmadan heç bir münasibət uzun müddət davam edə bilməz.</p>
                
                <h3>Effektiv ünsiyyət nədir?</h3>
                
                <p>Effektiv ünsiyyət sadəcə danışmaq deyil, həm də dinləmək, anlamaq və müvafiq şəkildə cavab verməkdir. Bu, düşüncə və hisslərinizi aydın şəkildə ifadə etmək, həmçinin qarşı tərəfin perspektivini başa düşmək qabiliyyətidir.</p>
                
                <h3>Sağlam ünsiyyətin əsas prinsipləri</h3>
                
                <p><strong>1. Aktiv dinləmə</strong> - Həqiqətən dinləmək, sadəcə növbəti sözünüzü düşünmək üçün gözləməkdən fərqlidir. Aktiv dinləmə zamanı:</p>
                <ul>
                    <li>Diqqətinizi tam şəkildə danışana yönəldin</li>
                    <li>Sözünü kəsməyin</li>
                    <li>Başa düşdüyünüzü göstərmək üçün başınızı tərpədin və ya "hə", "anlayıram" kimi sözlər deyin</li>
                    <li>Eşitdiklərinizi öz sözlərinizlə təkrarlayın: "Səni düzgün başa düşürəmsə..."</li>
                    <li>Açıq suallar verin ki, danışan fikrini daha da açıqlasın</li>
                </ul>
                
                <p><strong>2. "Mən" cümlələrindən istifadə edin</strong> - "Sən həmişə..." və ya "Sən heç vaxt..." kimi ittiham edici cümlələr əvəzinə, öz hisslərinizi ifadə edən "mən" cümlələrindən istifadə edin. Məsələn, "Sən heç vaxt məni dinləmirsən" əvəzinə "Danışarkən diqqətinin yayındığını görəndə özümü dəyərsiz hiss edirəm".</p>
                
                <p><strong>3. Qeyri-verbal ünsiyyətə diqqət yetirin</strong> - Sözləriniz qədər bədən diliniz, üz ifadəniz və səs tonunuz da vacibdir. Bədən dilinizin dediklərinizlə uyğun olduğundan əmin olun.</p>
                
                <p><strong>4. Empatiyanı inkişaf etdirin</strong> - Empatiya başqasının perspektivindən baxmaq və onların hisslərini anlamaq qabiliyyətidir. Bu, münasibətlərdə anlaşılmazlıqları və münaqişələri azaldır.</p>
                
                <p><strong>5. Sərhədlər qoyun və hörmət edin</strong> - Sağlam sərhədlər olmadan effektiv ünsiyyət mümkün deyil. Öz ehtiyac və hisslərinizi ifadə etməkdən çəkinməyin, eyni zamanda başqalarının sərhədlərinə hörmət edin.</p>
                
                <h3>Münaqişələri idarə etmək</h3>
                
                <p>Münaqişələr bütün münasibətlərin bir hissəsidir, lakin onları necə həll etməyiniz münasibətinizin keyfiyyətini müəyyən edir.</p>
                
                <p><strong>Sağlam münaqişə həlli üçün:</strong></p>
                <ul>
                    <li>Çox əsəbi olduğunuz zaman müzakirədən uzaqlaşın və sakitləşdikdən sonra davam edin</li>
                    <li>Problemə fokuslanın, şəxsə deyil</li>
                    <li>Kompromiss və həll yolları axtarın</li>
                    <li>Keçmişdəki səhvləri daim xatırlatmaqdan çəkinin</li>
                    <li>Lazım olduqda üzr istəyin və səmimi bağışlayın</li>
                </ul>
                
                <h3>Praktiki ünsiyyət məşqləri</h3>
                
                <p><strong>1. Gündəlik "dərdləşmə" vaxtı</strong> - Hər gün müəyyən bir vaxt ayırın ki, bir-birinizlə günün necə keçdiyini, düşüncə və hisslərinizi bölüşə biləsiniz. Telefon və digər diqqət dağıdan şeylərdən uzaq olun.</p>
                
                <p><strong>2. Təşəkkür jurnalı</strong> - Hər gün tərəf-müqabilinizin etdiyi və qiymətləndirdiyiniz bir şeyi qeyd edin və onunla bölüşün.</p>
                
                <p><strong>3. Rol dəyişdirmə</strong> - Münaqişə zamanı bir-birinizin mövqeyini müdafiə etməyə çalışın. Bu, empatiyanı artırır və yeni perspektivlər qazandırır.</p>
                
                <h3>Nəticə</h3>
                
                <p>Effektiv ünsiyyət bacarıqları öyrənilə bilən və təcrübə ilə təkmilləşdirilən bacarıqlardır. Bunlara vaxt və səy sərf etmək bütün münasibətlərinizin keyfiyyətini əhəmiyyətli dərəcədə artıra bilər. Yadda saxlayın, mükəmməl ünsiyyət quran olmaq deyil, davamlı olaraq yaxşılaşmağa çalışmaq vacibdir.</p>
                
                <p>Əgər münasibətlərinizdə ciddi ünsiyyət problemləri yaşayırsınızsa, cütlük terapiyası və ya ailə konsultasiyası kimi peşəkar yardım almaqdan çəkinməyin.</p>
            `
        },
        {
            id: 4,
            title: 'Özünüinkaşaf: Şəxsi potensialınızı reallaşdırmaq üçün 7 strategiya',
            category: 'self-growth',
            categoryName: 'Özünü İnkişaf',
            author: 'Anar Həsənov',
            date: '1 May, 2025',
            image: 'https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg',
            excerpt: 'Özünüinkişaf davamlı bir prosesdir. Bu məqalədə şəxsi potensialınızı reallaşdırmaq üçün praktik strategiyalar təqdim olunur.',
            content: `
                <p>Özünüinkişaf və şəxsi böyümə davamlı bir səyahətdir - heç vaxt tam başa çatmayan, lakin hər addımda həyatınızı zənginləşdirən bir proses. Potensialınızı tam reallaşdırmaq, daha məmnun və mənalı bir həyat yaşamaq və qarşınıza çıxan çətinliklərlə daha effektiv şəkildə mübarizə aparmaq üçün özünüinkişaf çox vacibdir.</p>
                
                <h3>Özünüinkişafın faydaları</h3>
                
                <p>Şəxsi inkişafa sərmayə qoymaq:</p>
                <ul>
                    <li>Özünəinamınızı və özünəhörmətinizi artırır</li>
                    <li>Stress və təşvişlə mübarizə qabiliyyətinizi gücləndirir</li>
                    <li>Məqsədlərinizə çatmaq üçün motivasiyanızı artırır</li>
                    <li>Daha sağlam münasibətlər qurmağa kömək edir</li>
                    <li>Həyatınızda daha çox məna və məqsəd hissi yaradır</li>
                </ul>
                
                <h3>Şəxsi potensialınızı reallaşdırmaq üçün 7 strategiya</h3>
                
                <p><strong>1. Özünüzü tanıyın</strong></p>
                
                <p>Özünüinkişafın təməli özünüzü dərindən tanımaqdır. Bu, güclü və zəif tərəflərinizi, dəyərlərinizi, inamlarınızı və həyatda nəyin sizin üçün həqiqətən vacib olduğunu anlamağı əhatə edir.</p>
                
                <p><strong>Praktik tapşırıq:</strong> Özünüdərk jurnalı yazın. Hər gün bu sualları cavablandırın: Bugün məni nə həyəcanlandırdı? Nə məni narahat etdi? Hansı dəyərlərə uyğun yaşadım? Hansılardan uzaqlaşdım?</p>
                
                <p><strong>2. Aydın məqsədlər təyin edin</strong></p>
                
                <p>Hara getdiyinizi bilmirsinizsə, oraya çatdığınızı da bilməyəcəksiniz. Aydın, ölçülə bilən və real məqsədlər təyin etmək inkişaf üçün yol xəritəsi yaradır.</p>
                
                <p><strong>Praktik tapşırıq:</strong> SMART məqsədlər yazın - Spesifik, Ölçülə bilən, Əldə edilə bilən, Relevant və Zamana bağlı. Onları kiçik addımlara bölün və hər gün irəliləyiş üçün bir şey edin.</p>
                
                <p><strong>3. Davamlı öyrənməyə sadiq qalın</strong></p>
                
                <p>Həyat boyu öyrənmə beynin plastikliyini qoruyur, yeni bacarıqlar qazandırır və həyata baxışınızı genişləndirir.</p>
                
                <p><strong>Praktik tapşırıq:</strong> Hər ay yeni bir bacarıq öyrənin, hər həftə bir kitab oxuyun, onlayn kurslara yazılın və ya podcstlara qulaq asın. Biliyinizi başqaları ilə bölüşün ki, onu möhkəmləndirəsiniz.</p>
                
                <p><strong>4. Komfort zonasından çıxın</strong></p>
                
                <p>Böyümə komfort zonasından kənarda baş verir. Qorxularınızla üzləşmək və yeni təcrübələrə açıq olmaq özünəinamınızı artırır və həyatınızı zənginləşdirir.</p>
                
                <p><strong>Praktik tapşırıq:</strong> Hər həftə sizi qorxudan və ya narahat edən kiçik bir şey edin. Danışmaqdan çəkinirsinizsə, bir tədbirdə sual verin. Yeni insanlarla tanış olmaqdan qorxursunuzsa, bir dərnəyə qoşulun.</p>
                
                <p><strong>5. Fiziki və zehni sağlamlığınıza qulluq edin</strong></p>
                
                <p>Sağlam bədən sağlam zehni dəstəkləyir. Fiziki sağlamlıq, yuxu və stressin idarə edilməsi özünüinkişaf üçün əsasdır.</p>
                
                <p><strong>Praktik tapşırıq:</strong> Gündəlik idman, meditasiya və mindfulness təcrübələri yaradın. Balanslaşdırılmış qidalanın və keyfiyyətli yuxu rejiminə riayət edin. Gündəlik sağlamlıq vərdişlərinizi izləyin.</p>
                
                <p><strong>6. Münasibətlərinizi inkişaf etdirin</strong></p>
                
                <p>Güclü sosial əlaqələr xoşbəxtliyin və rifahın ən güclü göstəricilərindən biridir. Dəstəkləyici münasibətlər qurmaq və saxlamaq şəxsi inkişafınızı sürətləndirir.</p>
                
                <p><strong>Praktik tapşırıq:</strong> Sevdiyiniz insanlara vaxt ayırın, yeni münasibətlər qurun, dinləmə və empatiya bacarıqlarınızı inkişaf etdirin. Sizə mənfi təsir göstərən münasibətləri məhdudlaşdırın.</p>
                
                <p><strong>7. Səbirsiz deyil, ardıcıl olun</strong></p>
                
                <p>Özünüinkişaf bir sprint deyil, marafondur. Qısa müddətli nəticələrə deyil, uzunmüddətli dəyişikliklərə fokuslanın.</p>
                
                <p><strong>Praktik tapşırıq:</strong> İrəliləyişinizi qeyd edin və kiçik qələbələri qeyd edin. Uğursuzluqları öyrənmə fürsəti kimi görün, səhvlərinizi etiraf edin və onlardan dərs çıxarın.</p>
                
                <h3>Özünüinkişaf planı yaratmaq</h3>
                
                <p>Effektiv özünüinkişaf planı yaratmaq üçün:</p>
                <ul>
                    <li>İndiki vəziyyətinizi qiymətləndirin: Haradasınız və hara getmək istəyirsiniz?</li>
                    <li>İnkişaf etmək istədiyiniz əsas sahələri müəyyənləşdirin</li>
                    <li>Hər sahə üçün ölçülə bilən məqsədlər təyin edin</li>
                    <li>Bu məqsədlərə çatmaq üçün addımlar planı hazırlayın</li>
                    <li>İrəliləyişinizi izləmək üçün sistem yaradın</li>
                    <li>Vaxtaşırı planınızı nəzərdən keçirin və uyğunlaşdırın</li>
                </ul>
                
                <h3>Nəticə</h3>
                
                <p>Özünüinkişaf hər kəs üçün fərqli görünür, çünki hər birimizin güclü və zəif tərəfləri, arzuları və məqsədləri var. Vacib olan müntəzəm və ardıcıl olmaq, həmçinin prosesdən zövq almaqdır.</p>
                
                <p>Yadda saxlayın ki, özünüinkişaf yolunda ən böyük maneə mükəmməliyyətçilikdir. Məqsəd mükəmməl olmaq deyil, dünənkindən daha yaxşı olmaq və potensialınıza doğru davamlı inkişaf etməkdir.</p>
            `
        },
        {
            id: 5,
            title: 'Stress və təşvişlə başa çıxmağın təbii yolları',
            category: 'anxiety',
            categoryName: 'Təşviş',
            author: 'Dr. Aynur Əliyeva',
            date: '25 Aprel, 2025',
            image: 'https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg',
            excerpt: 'Müasir həyatın təzyiqləri stress və təşvişə səbəb ola bilər. Bu məqalədə stress və təşvişlə təbii yollarla mübarizə aparmağı öyrənəcəksiniz.',
            content: `
                <p>Müasir həyatımızda stress və təşviş qaçılmaz görünə bilər. İş təzyiqi, maliyyə narahatlıqları, şəxsi münasibətlər və sosial media - bunların hamısı gündəlik stresimizə töhfə verir. Lakin xoş xəbər odur ki, stres və təşvişlə təbii yollarla mübarizə aparmaq mümkündür.</p>
                
                <h3>Stress və təşviş arasındakı fərq</h3>
                
                <p><strong>Stress</strong> - konkret bir təhdidə və ya təzyiqə qarşı təbii reaksiyadır. Bu, qısamüddətli ola bilər (kəskin stress) və ya uzunmüddətli (xroniki stress).</p>
                
                <p><strong>Təşviş</strong> - real və ya təsəvvür edilən təhdidlərə qarşı qorxu, narahatlıq və gərginlik hissidir. Təşviş, stressdən fərqli olaraq, təhdid artıq keçdikdən sonra da davam edə bilər.</p>
                
                <h3>Stress və təşvişlə mübarizənin təbii yolları</h3>
                
                <p><strong>1. Nəfəs alma texnikaları</strong></p>
                
                <p>Dərin və şüurlu nəfəs alma sinir sistemini sakitləşdirir, ürək döyüntüsünü yavaşladır və stresi azaldır.</p>
                
                <p><strong>Təcrübə:</strong> 4-7-8 nəfəs texnikası</p>
                <ul>
                    <li>Burnunuzdan sakit bir şəkildə 4 saniyə nəfəs alın</li>
                    <li>7 saniyə nəfəsinizi saxlayın</li>
                    <li>Ağzınızdan 8 saniyə nəfəs verin, dodaqlarınızı sanki fit çalırmış kimi büzün</li>
                    <li>Bu prosesi ən azı 4 dəfə təkrarlayın</li>
                </ul>
                
                <p><strong>2. Mindfulness və meditasiya</strong></p>
                
                <p>Mindfulness və meditasiya təcrübələri beyninizi indiki ana fokuslamağa kömək edir, narahatlıq yaradan düşüncələri azaldır və sinir sistemini sakitləşdirir.</p>
                
                <p><strong>Təcrübə:</strong> Sadə mindfulness məşqi</p>
                <ul>
                    <li>Rahat bir vəziyyətdə oturun</li>
                    <li>Gözlərinizi yumun və ya yumşaq bir nöqtəyə baxın</li>
                    <li>Nəfəsinizə diqqət yetirin - nəfəs alır və verirsiniz</li>
                    <li>Diqqətiniz yayınanda, mühakimə etmədən nəfəsinizə qayıdın</li>
                    <li>Hər gün 5-10 dəqiqə başlayın və tədricən artırın</li>
                </ul>
                
                <p><strong>3. Fiziki aktivlik</strong></p>
                
                <p>Müntəzəm idman stress hormonlarını azaldır, endorfin səviyyəsini artırır və ümumi rifah halını yaxşılaşdırır. Aerobik fəaliyyətlər (gəzmək, qaçmaq, üzmək) xüsusilə təşviş və depressiya simptomlarını azaltmaq üçün faydalıdır.</p>
                
                <p><strong>Təcrübə:</strong></p>
                <ul>
                    <li>Hər gün ən azı 30 dəqiqə orta intensivlikli fiziki aktivlik edin</li>
                    <li>Təbiətdə idman etməyə çalışın - "yaşıl idman" əlavə faydalar verir</li>
                    <li>Yoga və tai chi kimi fəaliyyətlər həm fiziki, həm də zehni faydalar təklif edir</li>
                </ul>
                
                <p><strong>4. Sağlam qidalanma</strong></p>
                
                <p>Qidalanmanız beyin kimyanıza və beləliklə də əhval-ruhiyyənizə təsir edir. Bəzi qidalar təşviş simptomlarını artıra bilər, digərləri isə sakitləşdirici təsir göstərə bilər.</p>
                
                <p><strong>Təcrübə:</strong></p>
                <ul>
                    <li>Kofein və şəkər qəbulunu azaldın - bunlar təşviş simptomlarını artıra bilər</li>
                    <li>Omega-3 zəngin qidalar yeyiin (yağlı balıq, qoz-fındıq, kətan toxumu)</li>
                    <li>Kompleks karbohidratlar (tam taxıl, tərəvəzlər) serotonin istehsalını artırır</li>
                    <li>Maqnezium zəngin qidalar (ispanaq, qara-qəhvəyi düyü, avokado) sinir sistemini sakitləşdirir</li>
                    <li>Bol su için - dehidratasiya stress reaksiyalarını artıra bilər</li>
                </ul>
                
                <p><strong>5. Bitki çayları və təbii əlavələr</strong></p>
                
                <p>Bəzi bitkilər təbii sakitləşdirici xüsusiyyətlərə malikdir və təşviş simptomlarını azaltmağa kömək edə bilər.</p>
                
                <p><strong>Təcrübə:</strong></p>
                <ul>
                    <li>Çobanyastığı çayı - təbii sakitləşdirici təsir göstərir</li>
                    <li>Lavanda - təşviş və yuxusuzluğu azaltmağa kömək edir</li>
                    <li>Pasiflora - təşviş simptomlarını azaldır</li>
                    <li>Valerian kökü - təbii yuxu dəstəyi təklif edir</li>
                </ul>
                
                <p><em>Qeyd: Hər hansı bir bitki əlavəsini qəbul etməzdən əvvəl həkiminizlə məsləhətləşin, xüsusilə əgər dərman qəbul edirsinizsə və ya xroniki sağlamlıq problemləriniz varsa.</em></p>
                
                <p><strong>6. Yuxu gigiyenası</strong></p>
                
                <p>Keyfiyyətli yuxu beyin funksiyasını və emosional sağlamlığınızı dəstəkləyir. Yuxu məhrumiyyəti stress və təşviş simptomlarını əhəmiyyətli dərəcədə artırır.</p>
                
                <p><strong>Təcrübə:</strong></p>
                <ul>
                    <li>Müntəzəm yatma/oyanma qrafiki yaradın</li>
                    <li>Yatmazdan əvvəl ekranlardan istifadəni məhdudlaşdırın</li>
                    <li>Rahat, sərin və qaranlıq yataq otağı yaradın</li>
                    <li>Yatmazdan əvvəl sakitləşdirici ritual yaradın (isti vanna, kitab oxumaq, sakitləşdirici musiqi)</li>
                </ul>
                
                <p><strong>7. Sosial əlaqələr qurun</strong></p>
                
                <p>Güclü sosial dəstək stresə qarşı ən effektiv buferlərdən biridir. Özünüzü təcrid etmək təşviş və depressiya simptomlarını daha da pisləşdirə bilər.</p>
                
                <p><strong>Təcrübə:</strong></p>
                <ul>
                    <li>Etibarlı dostlar və ailə üzvləri ilə əlaqə saxlayın</li>
                    <li>Hisslərinizdən danışın - onları içinizdə saxlamayın</li>
                    <li>Dəstək qruplarına qoşulun - eyni çətinlikləri yaşayan insanlarla əlaqə qurmaq faydalı ola bilər</li>
                    <li>Könüllü olun - başqalarına kömək etmək öz problemlərinizi perspektivə qoymağa kömək edə bilər</li>
                </ul>
                
                <h3>Nə zaman peşəkar yardım axtarmalı</h3>
                
                <p>Təbii strategiyalar faydalı olsa da, bəzən peşəkar yardım lazım olur. Əgər:</p>
                <ul>
                    <li>Təşviş və ya stress gündəlik həyatınıza mane olursa</li>
                    <li>Simptomlar getdikcə pisləşirsə</li>
                    <li>Özünüzə kömək etmək üçün spirt və ya narkotik maddələrdən istifadə edirsinizsə</li>
                    <li>Depressiya əlamətləri yaşayırsınızsa</li>
                    <li>İntihar düşüncələriniz varsa</li>
                </ul>
                
                <p>Bu hallarda, psixoloq, psixoterapevt və ya psixiatr kimi mütəxəssisdən yardım alın.</p>
                
                <h3>Nəticə</h3>
                
                <p>Stress və təşviş ilə mübarizə aparmaq üçün bir çox təbii yol var. Özünüzə ən uyğun metodları tapmaq üçün eksperiment edin və bunları gündəlik həyatınıza inteqrasiya edin. Yadda saxlayın ki, dəyişiklik bir gecədə baş vermir - müntəzəmlik və səbir açardır.</p>
            `
        },
        {
            id: 6,
            title: 'Depressiya əleyhinə qidalanma: Əhval-ruhiyyənizi yaxşılaşdıran qidalar',
            category: 'depression',
            categoryName: 'Depressiya',
            date: '20 Aprel, 2025',
            author: 'Dr. Nigar Quliyeva',
            image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg',
            excerpt: 'Qidalanma və əhval-ruhiyyə arasında güclü əlaqə var. Bu məqalədə depressiya simptomlarını azaltmağa kömək edən qidalar haqqında məlumat veririk.',
            content: `
                <p>Qidalanma və ruhi sağlamlıq arasındakı əlaqə getdikcə daha çox elmi tədqiqatlarla təsdiqlənir. "Siz yediyinizsiniz" ifadəsi sadəcə fiziki sağlamlığınıza deyil, həm də əqli və emosional rifahınıza aiddir. Düzgün qidalanma depressiyanın müalicəsində əsas həll yolu olmasa da, simptomları idarə etməyə və ümumi əhval-ruhiyyəni yaxşılaşdırmağa kömək edə bilər.</p>
                
                <h3>Beyin və bağırsaq əlaqəsi</h3>
                
                <p>Beyin və bağırsaq arasında ikitərəfli əlaqə var. Bağırsaq mikrobiomu serotonin kimi neyrotransmitterlərin istehsalına təsir edir - bu, əhval-ruhiyyə tənzimləyicisi kimi tanınan kimyəvi maddədir. Əslində, bədənimizdəki serotoninin təxminən 95%-i bağırsaqda istehsal olunur.</p>
                
                <p>Sağlam bağırsaq mikrobiomu təşviq edən qidalar yemək beyin sağlamlığınızı və əhval-ruhiyyənizi dəstəkləyə bilər. Digər tərəfdən, yüksək emal edilmiş, şəkər dolu qidalar iltihaba və mikrobiomdakı pozuntulara səbəb ola bilər ki, bu da depressiya riskini artıra bilər.</p>
                
                <h3>Əhval-ruhiyyə yaxşılaşdıran qidalar</h3>
                
                <p><strong>1. Omega-3 yağ turşuları ilə zəngin qidalar</strong></p>
                
                <p>Omega-3 yağ turşuları beyin sağlamlığı üçün vacibdir və tədqiqatlar göstərir ki, onlar depressiya simptomlarını azalda bilər.</p>
                
                <p><strong>Mənbələr:</strong></p>
                <ul>
                    <li>Yağlı balıq (salmon, skumbriya, sardina)</li>
                    <li>Kətan toxumu və kətan yağı</li>
                    <li>Chia toxumları</li>
                    <li>Qoz</li>
                    <li>Soya məhsulları</li>
                </ul>
                
                <p><strong>2. Probiotiklər və prebiotiklər</strong></p>
                
                <p>Bağırsaq sağlamlığını dəstəkləyən bu qidalar bağırsaq-beyin əlaqəsini gücləndirə və əhval-ruhiyyəni yaxşılaşdıra bilər.</p>
                
                <p><strong>Probiotik mənbələri:</strong></p>
                <ul>
                    <li>Yoqurt (canlı kulturalar ilə)</li>
                    <li>Kefir</li>
                    <li>Turşudulmuş kələm (kimchi, sauerkraut)</li>
                    <li>Kombucha</li>
                </ul>
                
                <p><strong>Prebiotik mənbələri:</strong></p>
                <ul>
                    <li>Sarımsaq</li>
                    <li>Soğan</li>
                    <li>Pırasa</li>
                    <li>Asparagus</li>
                    <li>Banan</li>
                    <li>Yulaf</li>
                </ul>
                
                <p><strong>3. Antioksidantlarla zəngin qidalar</strong></p>
                
                <p>Antioksidantlar oksidativ streslə mübarizə aparır və beyin sağlamlığını qoruyur. Depressiyası olan insanlarda çox vaxt yüksək oksidativ stress səviyyələri müşahidə olunur.</p>
                
                <p><strong>Mənbələr:</strong></p>
                <ul>
                    <li>Rəngli meyvə və tərəvəzlər (giləmeyvələr, narıncı və qırmızı tərəvəzlər)</li>
                    <li>Tünd yaşıl yarpaqlı tərəvəzlər (ispanaq, kələm)</li>
                    <li>Tünd şokolad (70% və daha yüksək kakao tərkibli)</li>
                    <li>Yaşıl çay</li>
                    <li>Kurkuma və zəncəfil kimi ədviyyatlar</li>
                </ul>
                
                <p><strong>4. Kompleks karbohidratlar</strong></p>
                
                <p>Kompleks karbohidratlar qan şəkərini sabit saxlayır və serotonin istehsalını təşviq edir.</p>
                
                <p><strong>Mənbələr:</strong></p>
                <ul>
                    <li>Tam taxıl çörəyi və makaron məmulatları</li>
                    <li>Qara-qəhvəyi düyü</li>
                    <li>Kvinoa</li>
                    <li>Yulaf</li>
                    <li>Mərcimək, lobya və digər paxlalılar</li>
                </ul>
                
                <p><strong>5. Protein mənbələri</strong></p>
                
                <p>Protein əhval-ruhiyyəyə təsir edən neyrotransmitterlərin istehsalı üçün vacib olan amin turşularını təmin edir.</p>
                
                <p><strong>Mənbələr:</strong></p>
                <ul>
                    <li>Yağsız ət</li>
                    <li>Balıq</li>
                    <li>Yumurta</li>
                    <li>Süd məhsulları</li>
                    <li>Paxlalılar və mərcimək</li>
                    <li>Tofu və tempeh</li>
                    <li>Qoz-fındıq və toxumlar</li>
                </ul>
                
                <p><strong>6. Vitamin D</strong></p>
                
                <p>D vitamini çatışmazlığı depressiya ilə əlaqələndirilir. Günəş işığı D vitamininin əsas mənbəyidir, lakin bəzi qidalar da tərkibində var.</p>
                
                <p><strong>Mənbələr:</strong></p>
                <ul>
                    <li>Yağlı balıq</li>
                    <li>Zənginləşdirilmiş süd və portağal şirəsi</li>
                    <li>Yumurta sarısı</li>
                </ul>
                
                <p><strong>7. B vitaminləri</strong></p>
                
                <p>B qrupu vitaminləri, xüsusən B6, B12 və fol turşusu əhval-ruhiyyəyə təsir edən neyrotransmitterlərin sintezində rol oynayır.</p>
                
                <p><strong>Mənbələr:</strong></p>
                <ul>
                    <li>Tam taxıl məhsulları</li>
                    <li>Qara-yaşıl yarpaqlı tərəvəzlər</li>
                    <li>Ət və balıq</li>
                    <li>Yumurta və süd məhsulları</li>
                    <li>Paxlalılar</li>
                    <li>Qoz-fındıq və toxumlar</li>
                </ul>
                
                <h3>Məhdudlaşdırılması tövsiyə olunan qidalar</h3>
                
                <p>Bəzi qidalar və içkilər depressiya simptomlarını ağırlaşdıra bilər:</p>
                
                <p><strong>1. Şəkər və rafinə edilmiş karbohidratlar</strong></p>
                <ul>
                    <li>Şirniyyat və şirin içkilər</li>
                    <li>Ağ çörək, ağ düyü və makaron</li>
                    <li>Çox emal edilmiş qidalar</li>
                </ul>
                
                <p><strong>2. Alkoqol</strong></p>
                <p>Alkoqol depressant maddədir və uzunmüddətli istifadə zamanı depressiya simptomlarını ağırlaşdıra bilər.</p>
                
                <p><strong>3. Kofein</strong></p>
                <p>Bəzi insanlar üçün həddindən artıq kofein təşviş simptomlarını və yuxu problemlərini artıra bilər, bu da depressiyaya təsir göstərə bilər.</p>
                
                <p><strong>4. Trans yağlar</strong></p>
                <p>Trans yağlar iltihaba səbəb ola bilər və depressiya riski ilə əlaqələndirilir.</p>
                
                <h3>Praktiki qidalanma strategiyaları</h3>
                
                <p><strong>1. Aralıqlı dəniz pəhrizi</strong></p>
                <p>Tədqiqatlar göstərir ki, Aralıq dənizi pəhrizi (təzə meyvə-tərəvəz, zeytun yağı, balıq, qoz-fındıq və məhdud miqdarda qırmızı ət) depressiya riskini azalda bilər.</p>
                
                <p><strong>2. Müntəzəm yemək</strong></p>
                <p>Qan şəkərinin kəskin dəyişməsinin qarşısını almaq üçün müntəzəm yemək yeyin. Aclıq əhval-ruhiyyənin pisləşməsinə səbəb ola bilər.</p>
                
                <p><strong>3. Hidrasiya</strong></p>
                <p>Hətta yüngül dehidratasiya belə əhval-ruhiyyəyə mənfi təsir göstərə bilər. Gün ərzində kifayət qədər su için.</p>
                
                <p><strong>4. Planlı yemək hazırlama</strong></p>
                <p>Depressiya zamanı yemək hazırlamaq çətin ola bilər. Əvvəlcədən yemək hazırlayın və dondurun və ya sağlam hazır yeməklər alın.</p>
                
                <h3>Nəticə</h3>
                
                <p>Qidalanma dəyişiklikləri depressiyanın vahid müalicəsi kimi nəzərdə tutulmayıb, lakin ümumi müalicə planının vacib bir hissəsi ola bilər. Tam taxıllar, təzə meyvə və tərəvəzlər, sağlam yağlar və keyfiyyətli proteinlərdən ibarət balanslaşdırılmış pəhriz beyin sağlamlığını dəstəkləyə və əhval-ruhiyyəni yaxşılaşdıra bilər.</p>
                
                <p>Hər hansı bir əhəmiyyətli pəhriz dəyişikliyi etməzdən əvvəl həmişə həkiminizlə məsləhətləşin, xüsusilə əgər dərman qəbul edirsinizsə və ya digər sağlamlıq problemləriniz varsa.</p>
                
                <p>Unutmayın ki, depressiya ilə mübarizədə holistik yanaşma - pəhriz, idman, stress idarəetmə, yaxşı yuxu vərdişləri və lazım olduqda professional müalicə - ən yaxşı nəticələr verir.</p>
            `
        },
        {
            id: 7,
            title: 'Münasibətlərdə sərhədlər: Sağlam əlaqələr qurmağın açarı',
            category: 'relationships',
            categoryName: 'Münasibətlər',
            date: '15 Aprel, 2025',
            author: 'Leyla Hüseynova',
            image: 'https://images.pexels.com/photos/7176302/pexels-photo-7176302.jpeg',
            excerpt: 'Sağlam münasibətlər sağlam sərhədlər tələb edir. Bu məqalədə sərhədlər haqqında ətraflı məlumat və onları necə qoymağı öyrənəcəksiniz.',
            content: `
                <p>Sərhədlər - münasibətlərimizdə ən vacib, lakin çox vaxt unudulan aspektlərdən biridir. Sərhədlər sizin şəxsi məkanınızı qoruyur, kimliyinizi saxlayır və ətrafdakılarla daha sağlam münasibətlər qurmağa kömək edir. Onlar olmadan, özünüzü tez-tez əzilmiş, istismar edilmiş və ya nəzərə alınmamış hiss edə bilərsiniz.</p>
                
                <h3>Sərhədlər nədir?</h3>
                
                <p>Sadə dildə, sərhədlər sizin üçün qəbuledilən və qəbuledilməz olanı müəyyən edən qaydalardır. Bunlar başqalarının sizinlə necə davrana biləcəyini, sizə necə müraciət edə biləcəyini və sizdən nə gözləyə biləcəyini göstərən sərhədlərdir.</p>
                
                <p>Sərhədlər müxtəlif formalarda ola bilər:</p>
                
                <ul>
                    <li><strong>Fiziki sərhədlər</strong> - şəxsi məkanınız, bədəniniz və şəxsi əşyalarınızla bağlı rahatlıq səviyyəniz</li>
                    <li><strong>Emosional sərhədlər</strong> - hisslərinizin necə idarə olunması və paylaşılması</li>
                    <li><strong>Vaxt və enerji sərhədləri</strong> - vaxtınızı və enerjinizi necə paylaşmağınızla bağlı</li>
                    <li><strong>İntellektual sərhədlər</strong> - düşüncələriniz və fikirlərinizə hörmət</li>
                    <li><strong>Maddi sərhədlər</strong> - pul və maddi əşyalarınızla bağlı</li>
                </ul>
                
                <h3>Niyə sərhədlər vacibdir?</h3>
                
                <p>Sağlam sərhədlər qurduqda:</p>
                
                <ul>
                    <li>Özünüzə hörmət və dəyər hissinizi artırırsınız</li>
                    <li>Mənfi emosiyaları və ressentimenti azaldırsınız</li>
                    <li>Daha çox enerji və rahatlıq qazanırsınız</li>
                    <li>Başqaları ilə daha aydın və səmimi münasibətlər qurursunuz</li>
                    <li>Şəxsi kimliyinizi qoruyursunuz</li>
                    <li>Emosional və fiziki tükənmənin qarşısını alırsınız</li>
                </ul>
                
                <h3>Zəif sərhədlərin əlamətləri</h3>
                
                <p>Sərhədlərinizin gücləndirilməyə ehtiyacı ola biləcəyinə dair işarələr:</p>
                
                <ul>
                    <li>"Yox" demək çətindir və özünüzü daim başqalarının tələblərinə görə əzilmiş hiss edirsiniz</li>
                    <li>Başqalarının hisslərindən məsul olduğunuzu düşünürsünüz</li>
                    <li>Öz ehtiyaclarınızı başqalarının ehtiyaclarından daha az vacib görürsünüz</li>
                    <li>Qərarlarınız ətrafdakıların təsdiqi və ya təsvirindən çox asılıdır</li>
                    <li>Münasibətlərdə özünüzü itirmiş və kimliyinizi unutmuş hiss edirsiniz</li>
                    <li>Münasibətlərdə tez-tez qurban rolunu oynayırsınız</li>
                    <li>Başqalarının sizə qarşı hörmətsiz davranmasına icazə verirsiniz</li>
                    <li>Daim başqalarının problemlərini həll etməyə çalışırsınız, öz problemlərinizi unudursunuz</li>
                </ul>
                
                <h3>Sağlam sərhədlər yaratmaq</h3>
                
                <p><strong>1. Özünüzü tanıyın</strong></p>
                
                <p>Sərhədlər qurmaq üçün ilk addım dəyərlərinizi, hisslərinizi və ehtiyaclarınızı tanımaqdır. Özünüzdən soruşun:</p>
                
                <ul>
                    <li>Hansı davranışlar və ya sözlər məni narahat edir?</li>
                    <li>Hansı vəziyyətlərdə özümü qiymətləndirilməmiş və ya hörmətsiz hiss edirəm?</li>
                    <li>Enerjimi və vaxtımı necə xərcləmək istəyirəm?</li>
                    <li>Münasibətlərimdə mənim üçün ən vacib dəyərlər nələrdir?</li>
                </ul>
                
                <p><strong>2. Aydın, birbaşa ünsiyyət qurun</strong></p>
                
                <p>Sərhədlərinizi aydın və birbaşa şəkildə ifadə edin. "Mən" cümlələrindən istifadə edin və konkret olun:</p>
                
                <ul>
                    <li>"Mənim üçün rahat deyil, səni narahat etmədən başqa bir mövzuya keçmək istəyirəm."</li>
                    <li>"Sənin üçün vaxt ayırmağı sevirəm, amma özüm üçün də vaxt lazımdır. Həftədə bir-iki gün özümə vaxt ayırmaq istəyirəm."</li>
                    <li>"Mənimlə bu tonda danışmağından xoşum gəlmir. Hörmətlə danışmağını xahiş edirəm."</li>
                </ul>
                
                <p><strong>3. "Yox" deməyi öyrənin</strong></p>
                
                <p>"Yox" demək sərhəd qoymağın ən vacib hissələrindən biridir. Uzun izahatlara və ya üzr istəməyə ehtiyac yoxdur:</p>
                
                <ul>
                    <li>"Təşəkkür edirəm ki, məni düşünürsən, amma iştirak edə bilməyəcəyəm."</li>
                    <li>"İndi bunu etmək üçün mənim üçün yaxşı vaxt deyil."</li>
                    <li>"Kömək etmək istərdim, amma indi başqa öhdəliklərim var."</li>
                </ul>
                
                <p><strong>4. Nəticələr müəyyən edin</strong></p>
                
                <p>Sərhədlərin pozulması halında nəticələri aydın şəkildə müəyyən edin və onlara əməl edin:</p>
                
                <ul>
                    <li>"Əgər səsini qaldırmağa davam etsən, mən söhbəti bitirəcəyəm."</li>
                    <li>"Əgər planlarımızı son anda ləğv etməyə davam etsən, gələcəkdə plan qurmaqdan çəkinəcəyəm."</li>
                </ul>
                
                <p><strong>5. Ardıcıl olun</strong></p>
                
                <p>Sərhədlərinizə ardıcıl şəkildə əməl edin. Əgər gah əməl edir, gah pozursunuzsa, başqaları onlara hörmət etməyəcək.</p>
                
                <p><strong>6. Başqalarının sərhədlərinə hörmət edin</strong></p>
                
                <p>Başqalarının sərhədlərinə hörmət etmək, öz sərhədlərinizə hörmət olunmasını təşviq edir.</p>
                
                <h3>Müxtəlif münasibətlərdə sərhədlər</h3>
                
                <p><strong>Romantik münasibətlərdə:</strong></p>
                <ul>
                    <li>Şəxsi məkan və müstəqillik ehtiyaclarınızı ifadə edin</li>
                    <li>Hansı məlumatları paylaşmaq istədiyinizi və hansıları şəxsi saxlamaq istədiyinizi müəyyən edin</li>
                    <li>İntimlik və fiziki təmas üçün rahatlıq səviyyənizi bildirin</li>
                    <li>Maliyyə məsələləri ilə bağlı gözləntiləri aydınlaşdırın</li>
                </ul>
                
                <p><strong>Ailə münasibətlərində:</strong></p>
                <ul>
                    <li>Şəxsi qərarlarınıza hörmətlə yanaşılmasını tələb edin</li>
                    <li>Ailə görüşlərində iştirak edə biləcəyiniz və bilməyəcəyiniz anları müəyyən edin</li>
                    <li>Həyat seçimlərinizlə bağlı tənqidlər üçün məhdudiyyətlər qoyun</li>
                </ul>
                
                <p><strong>İş yerində:</strong></p>
                <ul>
                    <li>İş vaxtından sonra əlçatan olmaqla bağlı məhdudiyyətlər qoyun</li>
                    <li>Əlavə iş götürməyə hazır olduğunuz şərtləri müəyyən edin</li>
                    <li>Hörmətsiz davranışlarla bağlı gözləntilərinizi bildirin</li>
                </ul>
                
                <p><strong>Dostluq münasibətlərində:</strong></p>
                <ul>
                    <li>Əlçatan olmadığınız vaxtları bildirin</li>
                    <li>Maliyyə məhdudiyyətləri haqqında açıq olun</li>
                    <li>Şəxsi məlumatlarınızın necə paylaşılacağı ilə bağlı gözləntilərinizi ifadə edin</li>
                </ul>
                
                <h3>Sərhəd qoymaqda çətinliklərin öhdəsindən gəlmək</h3>
                
                <p><strong>Günahkarlıq hissi:</strong> Özünüzə qayğı göstərmək eqoist deyil, əksinə sağlamlıq üçün vacibdir. Sərhədlər qoymaq başqalarına zərər vermək deyil, özünüzə hörmət etməkdir.</p>
                
                <p><strong>Rədd edilmə qorxusu:</strong> Əgər kimsə sərhədlərinizə hörmət etmirsə, o, bəlkə də hörmətə layiq münasibət deyil. Sağlam münasibətlər sərhədlərə hörmət edir.</p>
                
                <p><strong>Sərhəd pozmağa vərdiş etmiş insanlarla mübarizə:</strong> Hazır olun ki, sərhədlər qoyduğunuzda ilk reaksiyalar mənfi ola bilər. Qətiyyətli qalın və nəticələrə əməl edin.</p>
                
                <h3>Nəticə</h3>
                
                <p>Sərhədlər qurmaq vaxt və təcrübə tələb edən bir prosesdir. Çətin ola bilər, xüsusilə əgər uzun müddət zəif sərhədlərlə yaşamısınızsa. Ancaq bu, özünüzə qayğı göstərmək və sağlam, qarşılıqlı hörmət əsaslı münasibətlər qurmaq üçün vacib bir addımdır.</p>
                
                <p>Yadda saxlayın, sərhədlər qoymaq eqoist deyil - bu, sağlam və ləyaqətli həyat üçün əsasdır. Və hər kəs sağlam sərhədlərə layiqdir.</p>
            `
        },
        {
            id: 8,
            title: 'Öz-özünə kömək: Gündəlik ruh sağlamlığı üçün sadə vərdişlər',
            category: 'self-growth',
            categoryName: 'Özünü İnkişaf',
            date: '10 Aprel, 2025',
            author: 'Anar Həsənov',
            image: 'https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg',
            excerpt: 'Gündəlik həyatda ruh sağlamlığını qorumaq üçün sadə, lakin təsirli strategiyalar öyrənin.',
            content: `
                <p>Ruh sağlamlığı, fiziki sağlamlıq kimi, daimi diqqət və qulluq tələb edir. Müasir həyatın sürətli tempi və daimi stresin fonunda ruhi rifahımızı qorumaq daha da vacib olur. Xoşbəxtlik ondan ibarətdir ki, ruhi sağlamlığımızı yaxşılaşdırmaq üçün gündəlik həyatımıza daxil edə biləcəyimiz sadə, lakin təsirli strategiyalar var.</p>
                
                <h3>Mindfulness və iştirak təcrübəsi</h3>
                
                <p><strong>1. Sadə nəfəs alma məşqləri</strong></p>
                
                <p>Gün ərzində bir neçə dəqiqə ayırıb dərin nəfəs almağa diqqət yetirin. 4-7-8 texnikası xüsusilə effektivdir: 4 saniyə nəfəs alın, 7 saniyə nəfəsinizi saxlayın, 8 saniyə nəfəs verin. Bu, parasimpatik sinir sistemini aktivləşdirir və rahatlıq hissini artırır.</p>
                
                <p><strong>2. Gündəlik mindfulness təcrübəsi</strong></p>
                
                <p>Gündəlik fəaliyyətlərinizi mindfulness ilə edin - yeməyinizin dadına, yuyunarkən suyun hissinə, gəzinti zamanı ətrafınızdakı səslərə və mənzərələrə diqqət yetirin. Bu, sizi indiki ana gətirir və zehni dolaşıqlığı azaldır.</p>
                
                <p><strong>3. Qısa meditasiya</strong></p>
                
                <p>Gündə 5-10 dəqiqəlik meditasiya belə beyin kimyasını yaxşılaşdıra bilər. Başlanğıc üçün sadə fokuslanmış diqqət meditasiyası ilə başlayın - nəfəsinizə diqqət yetirin və diqqətiniz yayınanda, mühakimə etmədən nəfəsinizə qayıdın. Headspace və Calm kimi tətbiqlərdən istifadə edə bilərsiniz.</p>
                
                <h3>Fiziki sağlamlıq üçün strategiyalar</h3>
                
                <p><strong>1. Hərəkət edin</strong></p>
                
                <p>Fiziki aktivlik güclü antidepressant təsiri göstərir və beyin kimyasını yaxşılaşdırır. Hər gün ən azı 30 dəqiqə orta intensivlikli fiziki aktivlik edin - gəzmək, üzmək, velosiped sürmək və ya rəqs etmək. Önəmli olan sevdiyiniz və davam edə biləcəyiniz bir fəaliyyət tapmaqdır.</p>
                
                <p><strong>2. Yuxu gigiyenasına diqqət yetirin</strong></p>
                
                <p>Keyfiyyətli yuxu ruhi sağlamlıq üçün həyati əhəmiyyət daşıyır. Yaxşı yuxu üçün:</p>
                <ul>
                    <li>Müntəzəm yatma və oyanma saatları təyin edin</li>
                    <li>Yataq otağınızı sərin, qaranlıq və sakit saxlayın</li>
                    <li>Yatmazdan ən azı 1 saat əvvəl ekranlardan uzaq durun</li>
                    <li>Yatmazdan əvvəl sakitləşdirici ritual yaradın (isti vanna, kitab oxumaq, yüngül uzanma)</li>
                </ul>
                
                <p><strong>3. Balanslaşdırılmış qidalanın</strong></p>
                
                <p>Qidalanma və əhval-ruhiyyə arasında güclü əlaqə var. Beyniniz üçün yaxşı qidalanın:</p>
                <ul>
                    <li>Omega-3 yağ turşuları ilə zəngin qidalar (yağlı balıq, qoz, kətan toxumu) yemək</li>
                    <li>Kompleks karbohidratlar (tam taxıllar, tərəvəzlər) qan şəkərini sabit saxlayır</li>
                    <li>Probiotiklər (yoğurt, kefir) bağırsaq-beyin əlaqəsini dəstəkləyir</li>
                    <li>Antioksidantlarla zəngin qidalar (rəngli meyvə və tərəvəzlər) beyni qoruyur</li>
                    <li>Hidrasiyaya diqqət yetirin - yüngül dehidratasiya belə əhval-ruhiyyəyə təsir edir</li>
                </ul>
                
                <h3>Emosional və koqnitiv strategiyalar</h3>
                
                <p><strong>1. Minntədarlıq təcrübəsi</strong></p>
                
                <p>Minnətdarlıq beyindəki xoşbəxtlik kimyəvi maddələrini artırır. Hər gün 3 şeyi qeyd edin ki, onlara görə minnətdarsınız. Bunlar kiçik şeylər ola bilər: gözəl hava, dadlı bir fincan çay və ya dostunuzdan bir mesaj.</p>
                
                <p><strong>2. Pozitiv özünlə danışma</strong></p>
                
                <p>Daxili tənqidçinizə diqqət yetirin və onu daha mərhəmətli səslə əvəz edin. Özünüzlə bir dostunuzla danışdığınız kimi danışın. "Mən bacarmıram" kimi ifadələri "Mən hələ öyrənirəm" kimi ifadələrlə əvəz edin.</p>
                
                <p><strong>3. Duyğuların jurnalı</strong></p>
                
                <p>Hisslərinizdən qaçmaq əvəzinə, onları tanıyın və qəbul edin. Gündəlik yazı ilə hisslərinizi və onların səbəblərini araşdırın. Bu, emosional şüuru artırır və emosiyaların sizi idarə etməsinin qarşısını alır.</p>
                
                <p><strong>4. Koqnitiv yenidənqurma</strong></p>
                
                <p>Düşüncələrinizi izləyin və mənfi və ya qeyri-realistik olanları müəyyən edin. Bunları daha balanslaşdırılmış və realistik düşüncələrlə əvəz edin. Məsələn, "Hər şeyi məhv etdim" yerinə "Bir səhv etdim və bundan öyrənə bilərəm" deyin.</p>
                
                <h3>Sosial əlaqə və məna</h3>
                
                <p><strong>1. Münasibətlərə investisiya edin</strong></p>
                
                <p>Sosial əlaqələr ən güclü ruh sağlamlığı proqnozlaşdırıcılarından biridir. Sevdiyiniz insanlara vaxt ayırın, yeni əlaqələr qurun və keyfiyyətli ünsiyyətə üstünlük verin.</p>
                
                <p><strong>2. Sərhədlər qoyun</strong></p>
                
                <p>Sağlam sərhədlər öz ehtiyaclarınıza hörmət etməyin bir yoludur. "Yox" deməyi öyrənin və gərgin münasibətləri idarə edin. Emosional enerjinizi qoruduğunuz zaman, onu daha mənalı münasibətlərə yönəldə bilərsiniz.</p>
                
                <p><strong>3. Topluma qatılın</strong></p>
                
                <p>Özünüzdən böyük bir şeyin hissəsi olmaq ruhi sağlamlığı gücləndirir. Könüllü olun, yerli icma tədbirlərində iştirak edin və ya ortaq maraqları olan qruplara qoşulun.</p>
                
                <p><strong>4. Məqsəd və məna axtarın</strong></p>
                
                <p>Viktor Frankl dediyi kimi, "Yaşamağa 'nədən' tapan insan demək olar ki, hər 'necə' ilə barışa bilər." Dəyərlərinizlə uyğun və həyatınıza məna gətirən fəaliyyətlər tapın.</p>
                
                <h3>Stress idarəetmə strategiyaları</h3>
                
                <p><strong>1. Vaxt idarəetməsi</strong></p>
                
                <p>Öhdəliklərinizi prioritetləşdirin, gündəlik və həftəlik planlar hazırlayın və vaxtınızı realistik şəkildə idarə edin. "Yox" deməyi öyrənin və lazım olduqda kömək istəyin.</p>
                
                <p><strong>2. Təbiətdə vaxt keçirin</strong></p>
                
                <p>Təbiətdə olmaq stress hormonlarını azaldır və əhval-ruhiyyəni yaxşılaşdırır. Hər gün ən azı 20 dəqiqə yaşıl sahədə vaxt keçirməyə çalışın.</p>
                
                <p><strong>3. Relaksasiya texnikaları</strong></p>
                
                <p>Proqressiv əzələ relaksasiyası, dərin nəfəs alma və bədən skanı kimi texnikalar stress reaksiyasını azaldır. Bu texnikaları gündəlik təcrübənizə daxil edin.</p>
                
                <p><strong>4. Rəqəmsal detox</strong></p>
                
                <p>Sosial media və xəbərlərdən qısa fasilələr verin. Gün ərzində telefonsuz vaxtlar təyin edin və yatmazdan əvvəl ekranlardan uzaq durun.</p>
                
                <h3>Yaradıcı ifadə</h3>
                
                <p><strong>1. Sənət və yaradıcılıq</strong></p>
                
                <p>Yaradıcı özünüifadə - rəsm, musiqi, rəqs, yazı və ya əl işləri - emosiyaları emal etməyin və stresi azaltmağın güclü yoludur. Mükəmməllik üçün deyil, prosesin özündən zövq almaq üçün yaradın.</p>
                
                <p><strong>2. Musiqi terapiyası</strong></p>
                
                <p>Sevdiyiniz musiqini dinləyin və ya musiqi aləti çalın. Musiqi əhval-ruhiyyəni yaxşılaşdırır, stresi azaldır və hətta ağrını yüngülləşdirə bilər.</p>
                
                <h3>Praktiki tətbiq: Gündəlik ruh sağlamlığı planı</h3>
                
                <p>Ruhi sağlamlıq strategiyalarını gündəlik həyatınıza inteqrasiya etmək üçün sadə bir plan:</p>
                
                <p><strong>Səhər:</strong></p>
                <ul>
                    <li>5 dəqiqə meditasiya və ya şüurlu nəfəs</li>
                    <li>3 minnətdarlıq qeyd edin</li>
                    <li>Gün üçün niyyət təyin edin</li>
                    <li>Qidalı səhər yeməyi</li>
                </ul>
                
                <p><strong>Gün ərzində:</strong></p>
                <ul>
                    <li>Hər 2 saatda bir 1 dəqiqəlik nəfəs alma fasiləsi</li>
                    <li>Nahar vaxtında qısa gəzinti</li>
                    <li>Şüurlu yemək</li>
                    <li>Ekran fasilələri</li>
                </ul>
                
                <p><strong>Axşam:</strong></p>
                <ul>
                    <li>Günün yaxşı anlarını əks etdirmək</li>
                    <li>30 dəqiqə fiziki aktivlik</li>
                    <li>Ekransız fəaliyyət (oxumaq, əl işləri, sərbəst vaxt)</li>
                    <li>Yuxu ritualı - sakitləşdirici fəaliyyətlər</li>
                </ul>
                
                <h3>Nəticə</h3>
                
                <p>Ruh sağlamlığı bir məqsəd deyil, davamlı bir səyahətdir. Mükəmməlliyi hədəfləmək əvəzinə, kiçik, ardıcıl addımlar atın. Hər gün öz rifahınız üçün bir şey etmək, zaman keçdikcə böyük fərq yaradır.</p>
                
                <p>Əgər ruh sağlamlığı probleminiz varsa və ya bu strategiyalar kömək etmirsə, peşəkar yardım istəməkdən çəkinməyin. Yardım istəmək güc və müdriklik əlamətidir.</p>
                
                <p>Unutmayın ki, özünüzə qayğı göstərmək eqoistlik deyil, özünü qoruma və özünə hörmət aktyıdır. Özünüzə yaxşı baxdığınız zaman, başqalarına da daha çox verə bilərsiniz.</p>
            `
        }
    ];

    // Initialize articles
    const initArticles = () => {
        renderArticles(articles);
        
        // Search and filter functionality
        articleSearch.addEventListener('input', filterArticles);
        categoryTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                categoryTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                filterArticles();
            });
        });
    };

    // Render articles
    const renderArticles = (filteredList) => {
        articlesGrid.innerHTML = '';
        
        filteredList.forEach(article => {
            const card = document.createElement('div');
            card.classList.add('article-card');
            
            card.innerHTML = `
                <div class="article-image">
                    <img src="${article.image}" alt="${article.title}">
                </div>
                <div class="article-content">
                    <h3>${article.title}</h3>
                    <div class="article-meta">
                        <span>${article.date}</span>
                        <span>${article.categoryName}</span>
                    </div>
                    <p class="article-excerpt">${article.excerpt}</p>
                    <button class="btn primary read-more" data-id="${article.id}">Daha Ətraflı</button>
                </div>
            `;
            
            articlesGrid.appendChild(card);
        });
        
        // Add event listeners to read more buttons
        document.querySelectorAll('.read-more').forEach(button => {
            button.addEventListener('click', () => {
                const id = parseInt(button.dataset.id);
                openArticle(id);
            });
        });
    };

    // Filter articles
    const filterArticles = () => {
        const searchTerm = articleSearch.value.toLowerCase();
        const activeCategory = document.querySelector('.category-tab.active').dataset.category;
        
        const filtered = articles.filter(article => {
            const titleMatch = article.title.toLowerCase().includes(searchTerm);
            const contentMatch = article.content.toLowerCase().includes(searchTerm);
            const categoryMatch = activeCategory === 'all' || article.category === activeCategory;
            
            return (titleMatch || contentMatch) && categoryMatch;
        });
        
        renderArticles(filtered);
    };

    // Open article
    const openArticle = (id) => {
        const article = articles.find(a => a.id === id);
        
        if (article) {
            document.getElementById('modal-article-title').textContent = article.title;
            document.getElementById('modal-article-date').textContent = article.date;
            document.getElementById('modal-article-author').textContent = article.author;
            document.getElementById('modal-article-category').textContent = article.categoryName;
            document.getElementById('modal-article-img').src = article.image;
            document.getElementById('modal-article-content').innerHTML = article.content;
            
            // Show modal
            articleModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    };

    // Initialize functionality
    initCalendar();
    initPsychologists();
    initArticles();
});