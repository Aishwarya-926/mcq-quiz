const questions = [
    // Lectures 1-3: Foundations of Entrepreneurship and Innovation
    {
        question: "What is the Oxford Dictionary definition of 'Innovation' as presented in the lecture?",
        options: ["The activity of making money by starting businesses.", "The introduction of new things, ideas, or ways of doing something.", "The study of the natural sciences.", "The process of managing a large corporation."],
        correctAnswer: 1
    },
    {
        question: "According to Professor Pradeep's Q&A response, what is the relationship between invention and entrepreneurship?",
        options: ["They are the same concept.", "Inventions only happen in research labs, while entrepreneurship happens in business.", "Inventions are everywhere, but entrepreneurship is the step beyond that scales them.", "Entrepreneurship must always come before an invention can occur."],
        correctAnswer: 2
    },
    {
        question: "The lecture mentions that chemistry is present in 96% of all manufactured goods globally, yet it is 'losing.' What concept is this statement intended to highlight?",
        options: ["The lack of new chemical discoveries.", "The challenge of translating scientific presence into market value and public perception.", "The environmental damage caused by the chemical industry.", "The decline in the number of chemistry students."],
        correctAnswer: 1
    },
    {
        question: "What company was founded by Prof. Patrick Brown to create plant-based alternatives for meat and dairy?",
        options: ["Beyond Meat", "Impossible Foods", "Moderna Therapeutics", "BASF"],
        correctAnswer: 1
    },
    {
        question: "The translation of 'Electromagnetic induction (1831)' to 'Electrical power stations (1900s)' illustrates what key point?",
        options: ["Research success is immediate.", "The translation of research into a large-scale application involves many undervalued steps over a long period.", "Technology development is independent of politics and markets.", "Modern inventions are less complex than historical ones."],
        correctAnswer: 1
    },
    {
        question: "In the 'Idea - product - value' cycle diagram, what connects 'People, Equipment, Funding' to the cycle?",
        options: ["Ecosystem", "Environmental Impact", "Resources", "Society"],
        correctAnswer: 2
    },
    {
        question: "Which quadrant in the 'Technology transfer from laboratory' diagram represents 'Use-inspired basic research'?",
        options: ["Bohr Quadrant", "Edison Quadrant", "Pasteur Quadrant", "Commercial Quadrant"],
        correctAnswer: 2
    },
    {
        question: "What was the major issue with the company Theranos?",
        options: ["It failed to secure enough funding.", "Its core technology was proven to be a fantasy.", "It was outcompeted by CRISPR technology.", "The company was dissolved due to management disputes."],
        correctAnswer: 1
    },
    {
        question: "What is the key difference between 'Hard Tech/Deep Tech' (like BASF) and 'Tech' (like Microsoft) highlighted in the 'Scale of technologies' slide?",
        options: ["Tech companies are always more profitable.", "Hard Tech companies are much older but can have a significantly smaller market capitalization.", "Hard Tech requires fewer employees.", "Tech companies do not require physical materials."],
        correctAnswer: 1
    },
    {
        question: "In the discussion about spotting business opportunities, Professor Pradeep uses 'Impossible Food' as an example. What was the origin of that idea?",
        options: ["A government-funded research project.", "A breakthrough in food processing technology.", "The founder's personal experience and a specific problem ('itch') they wanted to solve.", "A request from a large food corporation."],
        correctAnswer: 2
    },
    {
        question: "According to the lecture, what is the central point of origin for technology in the 'Origin of technology' triangle diagram?",
        options: ["Knowledge, Society, and Universities interacting.", "Only academic institutions.", "Only the needs of people/users.", "Only publications and patents."],
        correctAnswer: 0
    },
    {
        question: "The lecture states, 'For your work to be lasting and impactful, address larger challenges.' This is mentioned in the context of what?",
        options: ["The high cost of research.", "The challenges of advanced science-based innovation.", "The ease of starting a business.", "The profitability of chemistry."],
        correctAnswer: 1
    },
    {
        question: "The chart on 'Global Inequality' (World Inequality Report 2022) shows that the bottom 50% of the population owns what percentage of the total wealth?",
        options: ["38%", "10%", "76%", "2%"],
        correctAnswer: 3
    },
    {
        question: "What example is given to show that 'Need is time and market dependent'?",
        options: ["The evolution from horseshoe nails to nails for nail guns.", "The constant need for water.", "The unchanging design of a hammer.", "The development of the light bulb."],
        correctAnswer: 0
    },
    {
        question: "What framework is repeatedly mentioned as a way to structure and guide the innovation process systematically?",
        options: ["The Lean Startup Principles", "Pasteur's Quadrant", "The Heilmeier Catechism", "Moore's Law"],
        correctAnswer: 2
    },
    // Lecture 4: The Lean Startup
    {
        question: "According to Eric Ries, a startup is a human institution designated to create new products and services under what condition?",
        options: ["Guaranteed profitability", "Complete certainty", "A well-defined market", "Extreme uncertainty"],
        correctAnswer: 3
    },
    {
        question: "Which of these is NOT one of the five principles of The Lean Startup mentioned in the lecture?",
        options: ["Entrepreneurs are everywhere", "Validated learning", "Move fast and break things", "Innovation accounting"],
        correctAnswer: 2
    },
    {
        question: "What is the core activity of the 'Build-Measure-Learn' principle?",
        options: ["A feedback loop to turn ideas into products, measure customer reactions, and decide whether to pivot or persevere.", "A linear process for product development.", "A management strategy focused only on building.", "An accounting method for tracking vanity metrics."],
        correctAnswer: 0
    },
    {
        question: "Validated learning is defined as a small unit of progress that can be quickly verified to determine if...",
        options: ["the product is profitable.", "the team is working efficiently.", "a chosen direction is correct.", "the market size is large enough."],
        correctAnswer: 2
    },
    {
        question: "Innovation accounting is about choosing key metrics to track and measure what really matters. Which of the following is an example?",
        options: ["Number of lines of code written.", "User engagement with the product.", "The size of the office space.", "The number of press releases issued."],
        correctAnswer: 1
    },
    {
        question: "The main objective of the Build-Measure-Learn loop is to:",
        options: ["Maximize the number of features in the product.", "Reduce the time taken to complete one cycle of the loop.", "Increase the amount of initial funding.", "Hire the largest possible team."],
        correctAnswer: 1
    },
    {
        question: "In the 'Optimise/change' diagram, what does MVP stand for?",
        options: ["Most Valuable Player", "Minimum Viable Product", "Maximum Value Proposition", "Major Venture Partnership"],
        correctAnswer: 1
    },
    {
        question: "According to Prof. Pradeep's response, the Build-Measure-Learn model actually starts with which question?",
        options: ["What can we build?", "How do we measure it?", "What do you want to learn?", "Who is our customer?"],
        correctAnswer: 2
    },
    {
        question: "Which company is used as an example of leveraging the Lean Startup methodology, alongside Dropbox and McDonald's?",
        options: ["CavinKare (Chik Shampoo)", "Tesla", "Google", "Amazon"],
        correctAnswer: 0
    },
    {
        question: "A startup has no real data, history, or market traction. What tool does the Lean Startup method provide to navigate this uncertainty?",
        options: ["Traditional business planning", "Innovation accounting", "Aggressive marketing", "Hiring experienced executives"],
        correctAnswer: 1
    },
    // Lecture 5: Problems Worth Solving & Design Thinking
    {
        question: "The 'concept of design thinking' diagram shows a cyclical process. What is the stage that follows 'Empathy'?",
        options: ["Ideate", "Prototype", "Define", "Test"],
        correctAnswer: 2
    },
    {
        question: "The Chukudu, a handmade wooden scooter from Congo, is shown as an example related to what concept?",
        options: ["The Lean Startup", "Intellectual Property", "Design Thinking", "Innovation Accounting"],
        correctAnswer: 2
    },
    {
        question: "The lecture discusses several 'hard problems.' Which of the following is an 'obvious conclusion' drawn from them?",
        options: ["Market acceptability guarantees commercial success.", "The existence of a solution means it is viable.", "Viable does not mean that it is acceptable in the market.", "Hard problems are easily solved with enough funding."],
        correctAnswer: 2
    },
    {
        question: "According to Prof. Pradeep's Q&A, what is the central point of Design Thinking?",
        options: ["Building a beautiful prototype.", "Empathy and experiencing the market need.", "Brainstorming as many ideas as possible.", "Quickly testing a final product."],
        correctAnswer: 1
    },
    {
        question: "The Hippo Water Roller is presented as a solution to what problem?",
        options: ["The need for clean air.", "The difficulty and time-consuming nature of transporting water in rural areas.", "The lack of affordable transportation.", "The need for early cancer detection."],
        correctAnswer: 1
    },
    {
        question: "In the Q&A, a student asks how entrepreneurs test market acceptability early on. Prof. Pradeep's response emphasizes using what to experiment with people?",
        options: ["A detailed business plan", "A prototype or MVP", "A large marketing budget", "A focus group survey"],
        correctAnswer: 1
    },
    {
        question: "The lecture asks, 'Why can't I travel to my village in one hour?' to frame a problem. This is an example of what stage of innovation?",
        options: ["Solution implementation", "Idea generation", "Market analysis", "Financial planning"],
        correctAnswer: 1
    },
    {
        question: "What major problem does the lecture highlight regarding the global fish industry?",
        options: ["Overfishing", "The product is perishable, creating huge logistical challenges.", "Lack of demand", "Low profitability"],
        correctAnswer: 1
    },
    {
        question: "The Design Thinking stage of 'Ideate' is described as:",
        options: ["Learning about the audience.", "Building a representation of an idea.", "Brainstorming and coming up with creative solutions.", "Redefining your question based on insights."],
        correctAnswer: 2
    },
    {
        question: "The lecture suggests that even if a solution is possible and exists, it may not be:",
        options: ["Innovative", "Viable or acceptable in the market", "Patented", "Understood by engineers"],
        correctAnswer: 1
    },
    // Lectures 6, 8 & 9: Intellectual Property, Patents & Toothpicks
    {
        question: "According to the World Intellectual Property Organization, IP refers to:",
        options: ["Physical property like land and buildings.", "Creations of the mind, such as inventions, literary works, and designs.", "Company profits and revenues.", "Publicly available information."],
        correctAnswer: 1
    },
    {
        question: "Which of the following is NOT a form of Intellectual Property mentioned in the lecture?",
        options: ["Patents", "Trademarks", "Business Plan", "Copyright"],
        correctAnswer: 2
    },
    {
        question: "A patent gives its owner the legal right to do what for a limited period?",
        options: ["Exclude others from making, using, or selling the invention.", "Force others to use the invention.", "Keep the invention a permanent secret.", "Receive government funding for the invention."],
        correctAnswer: 0
    },
    {
        question: "What are the three basic parameters for an invention to be patentable?",
        options: ["Profitable, Marketable, and Scalable", "Simple, Cheap, and Easy to Make", "Novelty, Non-obvious (Inventive Step), and Useful (Beneficial Purpose)", "Aesthetically Pleasing, Technically Complex, and Globally Applicable"],
        correctAnswer: 2
    },
    {
        question: "The concept of 'Prior Art' is related to which patentability requirement?",
        options: ["Usefulness", "Novelty", "Inventive Step", "Disclosure"],
        correctAnswer: 1
    },
    {
        question: "What is the maximum duration of a patent monopoly right from the filing date?",
        options: ["10 years", "20 years", "50 years", "Indefinite"],
        correctAnswer: 1
    },
    {
        question: "In the context of patents, who is the 'person skilled in the art'?",
        options: ["A layperson with no knowledge of the field.", "A hypothetical person who knows all public information in a technical field but has no inventive capacity.", "The inventor of the patent themselves.", "A patent attorney."],
        correctAnswer: 1
    },
    {
        question: "Which of the following is generally an exclusion from patentability in Europe and India, but not in the US?",
        options: ["A new chemical compound", "Methods of doing business", "A new mechanical device", "A pharmaceutical drug"],
        correctAnswer: 1
    },
    {
        question: "According to Prof. Pradeep's Q&A, what is protected by a patent?",
        options: ["The general idea of the invention.", "The claims within the patent.", "The title and abstract.", "The name of the inventor."],
        correctAnswer: 1
    },
    {
        question: "The evolution of the toothpick from a simple wooden stick (1891 patent) to an 'edible toothpick' (2005 patent) illustrates:",
        options: ["The decline of an industry.", "How a basic idea can be expanded and innovated upon over time.", "That patents are no longer useful.", "That simple products cannot be patented."],
        correctAnswer: 1
    },
    {
        question: "What is the first step in the 'Steps to patent' process listed in the lecture?",
        options: ["Patent application", "Patentability search", "Invention disclosure", "Publication"],
        correctAnswer: 1
    },
    {
        question: "In the Q&A, a student asks about building on ideas from old patents. What database does the professor's note suggest for tracking patent expiry?",
        options: ["The Library of Congress", "The Indian Patent Office website only", "Google Patents", "University research databases"],
        correctAnswer: 2
    },
    {
        question: "What was the key innovation in the 1983-1985 foundational patent by Akira Yoshino for the Lithium-Ion Battery?",
        options: ["The invention of the battery itself.", "A safe carbonaceous anode.", "A new type of laptop.", "A method for recycling batteries."],
        correctAnswer: 1
    },
    {
        question: "According to the table of 'Patents that gave big returns globally,' which technology generated ~$2,000,000,000 in cumulative royalties for Cetus/Roche?",
        options: ["Digital imaging", "PCR basic method", "Glyphosate-tolerant crops", "Cabilly antibody engineering"],
        correctAnswer: 1
    },
    {
        question: "In the Q&A, how does Prof. Pradeep suggest determining if a new invention is a genuine innovation or just a minor tweak of an existing patent?",
        options: ["By checking if the materials used are different.", "By assessing what limitations of the previous patent it overcomes.", "By calculating the cost difference between the two.", "By asking the patent office for an opinion."],
        correctAnswer: 1
    },
    {
        question: "The 'Anatomy of a patent' slide indicates that which part defines the full scope of protection?",
        options: ["The Abstract", "The Title", "The Description", "The Claims"],
        correctAnswer: 3
    },
    {
        question: "What does 'Freedom to operate' mean in the context of patents?",
        options: ["The right to use your own patent without infringing on anyone else's patents.", "The right to operate a business without any regulations.", "The freedom to file a patent in any country.", "The freedom to disclose your invention before filing a patent."],
        correctAnswer: 0
    },
    {
        question: "The lecture mentions 'One-patent unicorns.' In the 'Energy' domain, what is a potential 'One Patent' innovation?",
        options: ["A new design for a wind turbine.", "An earth-abundant hydrogen catalyst for water splitting.", "A more efficient solar panel.", "A new method for oil extraction."],
        correctAnswer: 1
    },
    {
        question: "The cost to obtain a US patent is estimated to be around:",
        options: ["Rs. 1 lakh", "5 to 7 lakhs", "50 to 70 lakhs", "Over 1 crore"],
        correctAnswer: 1
    },
    {
        question: "How is royalty decided for a patent, according to Prof. Pradeep?",
        options: ["It is a fixed 10% for all inventions.", "It is based on the value of the patent, potential market, and the inventor's share is determined, often in the 1-5% range.", "It is decided solely by the inventor.", "It is calculated based on the cost of filing the patent."],
        correctAnswer: 1
    },
    // Lectures 7, 10, 11 & 12: Team Building & Value Creation
    {
        question: "What is the definition of a 'Team' provided in the lecture?",
        options: ["A group of individuals working independently.", "Any collection of people in the same room.", "A group of people that works together to complete a common goal.", "A formal corporate hierarchy."],
        correctAnswer: 2
    },
    {
        question: "The 'Quit India!' slogan is used as an example to illustrate what aspect of a successful team or mission?",
        options: ["The need for complex instructions.", "The power of articulating a clear, crisp mission or goal.", "The importance of a large budget.", "The role of international support."],
        correctAnswer: 1
    },
    {
        question: "The lecture emphasizes 'Share, care and trust.' What is the essential foundation for organizational growth mentioned?",
        options: ["Sharing", "Trust", "Care", "Competition"],
        correctAnswer: 2
    },
    {
        question: "What key quality of leadership did Dr. A.P.J. Abdul Kalam demonstrate after the 1979 failure of the SLV-3 rocket?",
        options: ["Blaming the team for the failure.", "Immediately resigning from his position.", "Showing trust in his team to succeed the next time.", "Cancelling the project entirely."],
        correctAnswer: 2
    },
    {
        question: "Which of the following is listed as one of the 'Qualities of a good team'?",
        options: ["Uniformity of thought", "Communication", "A strict, unchanging plan", "Individual accountability only"],
        correctAnswer: 1
    },
    {
        question: "JFK's 'We choose to go to the moon' speech is used to highlight the power of:",
        options: ["Setting a clear, ambitious, and inspiring goal.", "Incremental, cautious progress.", "Individual achievement.", "Financial planning."],
        correctAnswer: 0
    },
    {
        question: "What is a key component of 'Emotional maturity' in a team?",
        options: ["Suppressing all emotions.", "Awareness and management of emotions, both individually and collectively.", "Always agreeing with the team leader.", "Believing that one person knows everything."],
        correctAnswer: 1
    },
    {
        question: "Which of the following is listed as something that can 'destroy teams'?",
        options: ["Clear objectives", "Diversity", "Micromanagement", "Recognition and rewards"],
        correctAnswer: 2
    },
    {
        question: "What is the core lesson from the 1992 US Olympic Basketball 'Dream Team'?",
        options: ["A team of individual superstars cannot work together.", "A team with complementary skill sets can achieve extraordinary results.", "Only one player needs to be a leader.", "Training is not as important as raw talent."],
        correctAnswer: 1
    },
    {
        question: "Professor Pradeep defines 'Value' as:",
        options: ["The price of an object.", "The extent of usefulness or importance of a person, object, or service.", "The cost of production.", "The brand name associated with a product."],
        correctAnswer: 1
    },
    {
        question: "The lecture states, 'Value is not created in isolation. Value is an _______.'",
        options: ["product", "idea", "experience", "transaction"],
        correctAnswer: 2
    },
    {
        question: "How did Starbucks enhance the value of 'selling coffee'?",
        options: ["By creating a social & cultural experience, a 'third place'.", "By offering the lowest possible prices.", "By automating the entire coffee-making process.", "By focusing only on the quality of the coffee beans."],
        correctAnswer: 0
    },
    {
        question: "What was the enhanced value proposition of the iPod & iTunes?",
        options: ["The ability to play CDs.", "A seamless ecosystem, iconic design, and '1000 songs in your pocket'.", "The lowest price for a music player.", "The highest sound quality available."],
        correctAnswer: 1
    },
    {
        question: "The Amul cooperative dairy model is a successful Indian innovation. What was its enhanced value?",
        options: ["The cheapest milk available.", "Trust, reliability, and emotional branding ('Taste of India').", "A focus on international exports.", "A high-tech production process."],
        correctAnswer: 1
    },
    {
        question: "Aravind Eye Care succeeded by implementing what model?",
        options: ["High-cost, premium surgeries.", "A government-run hospital system.", "An assembly-line cataract surgery, ultra-low-cost, cross-subsidy model.", "A chain of small, independent clinics."],
        correctAnswer: 2
    },
    {
        question: "The 'Sachet Shampoo' (Chik Shampoo) innovation scaled successfully primarily because it provided:",
        options: ["The best quality shampoo on the market.", "A wide variety of fragrances.", "Affordable access to branded personal care for a mass market.", "A large, family-sized bottle."],
        correctAnswer: 2
    },
    {
        question: "Why did the Tata Nano, the world's cheapest car, struggle in the market?",
        options: ["The engine was unreliable.", "It was perceived as 'cheap', creating an aspirational mismatch for consumers.", "The marketing campaign was non-existent.", "It was priced too high at Rs 2.5 Lakhs initially."],
        correctAnswer: 1
    },
    {
        question: "The Simputer, a low-cost handheld computer from the early 2000s, failed mainly due to:",
        options: ["Poor design.", "A high price point.", "Ecosystem immaturity and being leapfrogged by smartphones.", "Lack of government support."],
        correctAnswer: 2
    },
    {
        question: "What is the key lesson from the struggles of innovations like the Tata Nano and Chotukool fridge?",
        options: ["Engineering is the only thing that matters.", "Low cost is always the most important factor for consumers.", "High-quality innovations can fail if they ignore user psychology and aspirations.", "Indian consumers are not ready for innovative products."],
        correctAnswer: 2
    },
    {
        question: "What technology is used in the example of creating value by detecting Alzheimer's progression?",
        options: ["Analyzing blood samples.", "Brain imaging scans.", "Chronicling the degradation of a patient's signature over time.", "Voice analysis software."],
        correctAnswer: 2
    },
    // Mixed Concepts & Q&A Insights
    {
        question: "In the Q&A, a student suggests that 'trust' is what they learned from the Dream Team video. How does Prof. Pradeep refine this answer?",
        options: ["He agrees that trust is the only factor.", "He states that it is not trust, but extensive training and choreographed plays.", "He suggests that the players did not trust each other.", "He says trust is irrelevant in professional sports."],
        correctAnswer: 1
    },
    {
        question: "According to the lecture, 'measurement leads to _______.'",
        options: ["profits", "complications", "innovations", "data"],
        correctAnswer: 2
    },
    {
        question: "The 'Honda and Fujishima, Nature 1972' reference is related to what scientific concept?",
        options: ["Nuclear magnetic resonance (NMR).", "The invention of the transistor.", "The discovery of penicillin.", "Photoelectrochemical water splitting ('expanding science')."],
        correctAnswer: 3
    },
    {
        question: "What does Prof. Pradeep mean when he says, 'Molecules are not bits!'?",
        options: ["Innovations in the physical world (hard tech) often require more endurance and face different challenges than software innovations.", "Molecules are easier to work with than computer bits.", "Software is more valuable than chemistry.", "Molecular biology has no connection to computer science."],
        correctAnswer: 0
    },
    {
        question: "In the Q&A, a student asks if an AI-based application can be patented in India. What is Prof. Pradeep's response?",
        options: ["No, AI is not patentable under any circumstances.", "Yes, it is always patentable.", "It depends on its utility and the value it creates.", "Only if it is related to a cancer drug."],
        correctAnswer: 2
    },
    {
        question: "A key lesson from Indian innovation is that frugal, inclusive, and scalable models thrive when they align with:",
        options: ["Government regulations", "Aspirations", "The lowest possible price point", "Global trends"],
        correctAnswer: 1
    },
    {
        question: "The book 'The Future of Competition' by C.K. Prahalad emphasizes what concept?",
        options: ["The separation of tech and user.", "Co-creating unique value with customers.", "Beating the competition on price.", "Building a monopoly."],
        correctAnswer: 1
    },
    {
        question: "The failure of the Aakash Tablet, a low-cost educational device, was attributed to:",
        options: ["A lack of demand from students.", "Poor user experience and procurement inefficiencies.", "Competition from Apple's iPad.", "A price that was still too high."],
        correctAnswer: 1
    },
    {
        question: "In the Q&A about the rudimentary lift, which of the following was NOT mentioned as a reason for its lack of success?",
        options: ["Lack of patent/easily copiable", "Safety and regulatory concerns", "It was too expensive to build", "More refined and efficient versions already exist"],
        correctAnswer: 2
    },
    {
        question: "The India Stack, including Aadhaar and UPI, is a successful innovation that provides what enhanced value?",
        options: ["A new social media platform.", "Seamless, real-time access to digital identity and payments for a billion people.", "Low-cost smartphones.", "An e-commerce platform for retail."],
        correctAnswer: 1
    },
    {
        question: "What is the central theme of Simon Sinek's book 'Leaders Eat Last'?",
        options: ["How to maximize shareholder value.", "Why some teams pull together and others don't, focusing on creating a circle of safety.", "A guide to financial management.", "The history of leadership styles."],
        correctAnswer: 1
    },
    {
        question: "According to the student responses on what they would look for in a 6th team member, which quality was repeatedly emphasized?",
        options: ["Someone who agrees with everyone.", "Someone who can work long hours.", "Someone who brings new, complementary skills and a collaborative attitude.", "Someone who has the most experience."],
        correctAnswer: 2
    },
    {
        question: "What company holds approximately 8000 registered trademarks, including its name and logo?",
        options: ["Microsoft", "IBM", "Apple", "Samsung"],
        correctAnswer: 2
    },
    {
        question: "The lecture states that a patent is 'like a paper, a disclosure of facts.' This highlights the patent's role in:",
        options: ["Keeping information secret.", "Making technical information public.", "Serving as an advertisement.", "Being a legal contract only."],
        correctAnswer: 1
    },
    {
        question: "The invention of Post-it notes by Spencer Silver is used as an example of what?",
        options: ["A meticulously planned research project.", "An accidental finding or serendipity.", "A direct response to a market need.", "A government-sponsored invention."],
        correctAnswer: 1
    },
    {
        question: "What is the key message behind 'Grass Roots Innovation' as presented by Anil K. Gupta?",
        options: ["Only educated scientists can innovate.", "Innovation happens everywhere, including by people without formal education.", "All grassroots innovations should be patented.", "Revenue is the most important impact of innovation."],
        correctAnswer: 1
    },
    {
        question: "The professor uses the analogy of a 'CO2 sponge' on the walls of a room to encourage students to:",
        options: ["Think about large-scale environmental engineering projects.", "Find opportunities for innovation in their immediate surroundings.", "Focus only on chemistry-related problems.", "Buy an air purifier."],
        correctAnswer: 1
    },
    {
        question: "In the Q&A, a student asks about filing a patent as an employee that is not related to the employer's business. What is the professor's advice?",
        options: ["It is never allowed.", "It is always allowed.", "It depends on the employer's contract and policies; some organizations like IBM and TATA have allowed it.", "The employee should quit their job first."],
        correctAnswer: 2
    },
    {
        question: "What is the main characteristic of the 'technology push' driver for tech transfer?",
        options: ["It starts with a customer discovery or a market need.", "It starts with a technology discovery from research that then seeks an application.", "It is always an incremental innovation.", "It is driven by marketing and sales teams."],
        correctAnswer: 1
    },
    {
        question: "In the final Q&A of Lecture 8, the professor encourages students to 'look at any object in front of you and ask this question is there something new that I can find in that' in order to:",
        options: ["Determine its market value.", "Hone their innovator's brain.", "Pass the course exam.", "Find a product to sell immediately."],
        correctAnswer: 1
    },
    {
        question: "The lecture on team building lists several characteristics of excellent teams. Which of the following is included?",
        options: ["A person who brings money and contacts.", "Align to vision – vision is set first.", "Recruiting someone with tremendous endurance.", "All of the above."],
        correctAnswer: 3
    },
    {
        question: "The concept of 'Intangible value' includes assets like:",
        options: ["Buildings and machinery.", "Cash and inventory.", "Brand recognition, goodwill, and patents.", "Raw materials."],
        correctAnswer: 2
    },
    {
        question: "LEGO enhanced the value of its 'interlocking plastic bricks' by transforming it into a:",
        options: ["Low-cost manufacturing process.", "Creativity platform with community, films, and education.", "Collectible item for adults only.", "Construction material for buildings."],
        correctAnswer: 1
    },
    {
        question: "Nike is presented as evolving from selling 'Athletic shoes' to providing:",
        options: ["The cheapest footwear.", "A personal identity through storytelling, digital engagement, and aspiration.", "Formal dress shoes.", "A subscription service for shoes."],
        correctAnswer: 1
    },
    {
        question: "According to the 'Procedure of patent filing' flowchart, what happens at 18 months?",
        options: ["Grant of patent & Publication (B)", "File PCT Application", "Publication (A) & search report", "Annual renewal fees are due"],
        correctAnswer: 2
    }
];

// --- Rest of the code (no need to change) ---
const questionNumberEl = document.getElementById('question-number');
const questionTextEl = document.getElementById('question-text');
const optionsContainerEl = document.getElementById('options-container');
const showAnswerBtn = document.getElementById('show-answer-btn');
const nextBtn = document.getElementById('next-btn');
const quizContainer = document.querySelector('.quiz-container');

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    optionsContainerEl.innerHTML = '';
    showAnswerBtn.style.display = 'inline-block';
    const currentQuestion = questions[currentQuestionIndex];
    questionNumberEl.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    questionTextEl.textContent = currentQuestion.question;

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option-btn');
        button.addEventListener('click', () => selectAnswer(index));
        optionsContainerEl.appendChild(button);
    });
}

function selectAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestionIndex].correctAnswer;
    const optionButtons = optionsContainerEl.children;
    if (selectedIndex === correctIndex) {
        optionButtons[selectedIndex].classList.add('correct');
        score++;
    } else {
        optionButtons[selectedIndex].classList.add('incorrect');
        optionButtons[correctIndex].classList.add('correct');
    }
    Array.from(optionButtons).forEach(button => button.disabled = true);
    showAnswerBtn.style.display = 'none';
}

function showAnswer() {
    const correctIndex = questions[currentQuestionIndex].correctAnswer;
    const optionButtons = optionsContainerEl.children;
    optionButtons[correctIndex].classList.add('correct');
    Array.from(optionButtons).forEach(button => button.disabled = true);
    showAnswerBtn.style.display = 'none';
}

function showFinalScore() {
    quizContainer.innerHTML = `
        <h1>Quiz Complete!</h1>
        <p>Your final score is ${score} out of ${questions.length}.</p>
        <button onclick="location.reload()">Restart Quiz</button>
    `;
}

nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showFinalScore();
    }
});

showAnswerBtn.addEventListener('click', showAnswer);
loadQuestion();
