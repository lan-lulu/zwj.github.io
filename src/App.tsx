import { useState } from 'react';
import { Mail, Briefcase, GraduationCap, Users, User, ArrowRight, CheckSquare, Square, Play, Code, Layout, Database } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const tabs = [
  { id: 'home', label: '首页', icon: User },
  { id: 'skills', label: '个人技能', icon: Code },
  { id: 'education', label: '教育背景', icon: GraduationCap },
  { id: 'campus', label: '校园经历', icon: Users },
  { id: 'experience', label: '工作经历', icon: Briefcase },
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen pb-20 relative overflow-hidden">
      {/* Decorative background subtle elements could go here */}

      {/* Navbar */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <nav className="bg-white brutal-border brutal-shadow rounded-full px-6 py-3 flex items-center justify-between max-w-3xl w-full">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full brutal-border flex items-center justify-center bg-brutal-yellow font-bold">
              WJ
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-6 text-sm font-bold">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-2 py-1 ${activeTab === tab.id ? 'text-brutal-blue' : 'text-black hover:text-black/70'}`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-1 bg-brutal-blue"
                  />
                )}
              </button>
            ))}
          </div>

          <a href="mailto:742764356@qq.com" className="bg-black text-white w-10 h-10 rounded-full flex items-center justify-center brutal-btn">
            <Mail size={18} />
          </a>
        </nav>
      </div>

      {/* Main Content area */}
      <main className="max-w-6xl mx-auto px-6 pt-36">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'home' && <HomeTab />}
            {activeTab === 'skills' && <SkillsTab />}
            {activeTab === 'education' && <EducationTab />}
            {activeTab === 'campus' && <CampusTab />}
            {activeTab === 'experience' && <ExperienceTab />}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

function HomeTab() {
  return (
    <div className="space-y-32">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            你好，我是 <span className="bg-brutal-red text-white highlight-bg">张文杰</span>,<br />
            一名<span className="bg-brutal-blue text-white highlight-bg">Java后端开发工程师</span><br />
            位于 <span className="bg-brutal-yellow text-white highlight-bg">武汉</span>
          </h1>
          <p className="text-lg text-gray-700 max-w-lg mt-6">
            有较强的责任心和学习能力，能快速适应工作内容和环境。具有抗压能力以及较强的沟通能力和团队协作精神，能够快速融入团队并积极解决问题。
          </p>
          <div className="flex items-center gap-4 pt-4">
            <a href="mailto:742764356@qq.com" className="bg-black text-white font-bold px-8 py-4 rounded-xl brutal-shadow-sm brutal-btn flex items-center gap-2">
              <Mail size={20} />
              联系我
            </a>
            <button onClick={() => window.open('tel:18827118310')} className="bg-white text-black font-bold px-8 py-4 rounded-xl brutal-border brutal-shadow-sm brutal-btn flex items-center gap-2">
              <Briefcase size={20} />
              18827118310
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-[380px] h-[380px] bg-brutal-yellow brutal-border brutal-shadow rounded-3xl relative overflow-hidden">
            <img src="/hero.png" alt="张文杰" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}

function SkillsTab() {
  return (
    <div className="space-y-24">
      {/* About Section */}
      <section className="flex flex-col md:flex-row-reverse items-center justify-between gap-16">
        <div className="flex-1 space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            掌握的核心<br />
            <span className="bg-brutal-blue text-white highlight-bg">技术栈</span>
          </h2>
          <p className="text-gray-700 text-lg">
            熟练掌握Java语法，有着良好的编程习惯，对面向对象思想有深刻理解。熟练掌握Spring、SpringBoot、MyBatis等主流开源框架，理解IoC以及AOP原理。
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="mt-1"><div className="w-6 h-6 bg-brutal-purple brutal-border rounded-md"></div></div>
              <div>
                <h3 className="font-bold text-xl mb-1">后端开发</h3>
                <p className="text-gray-600">Java、Spring Boot、MyBatis、Spring Cloud微服务、Nacos</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
               <div className="mt-1"><div className="w-6 h-6 bg-brutal-red brutal-border rounded-md"></div></div>
              <div>
                <h3 className="font-bold text-xl mb-1">数据库</h3>
                <p className="text-gray-600">MySQL、Oracle、达梦数据库、Redis缓存</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
               <div className="mt-1"><div className="w-6 h-6 bg-brutal-yellow brutal-border rounded-md"></div></div>
              <div>
                <h3 className="font-bold text-xl mb-1">前端技术</h3>
                <p className="text-gray-600">Vue、Element-Plus</p>
              </div>
            </div>
          </div>

          <button className="bg-black text-white font-bold px-8 py-4 rounded-xl brutal-shadow-sm brutal-btn flex items-center gap-2">
            <Code size={20} />
            了解更多
          </button>
        </div>

        <div className="flex-1 flex justify-center md:justify-start">
          <div className="w-[420px] h-[420px] bg-brutal-red brutal-border rounded-full flex items-center justify-center relative overflow-hidden brutal-shadow">
            <img src="/skills.png" alt="个人技能" className="w-[102%] h-[102%] object-contain" />
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="space-y-12 pb-12 mt-20">
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          技术<span className="bg-brutal-yellow highlight-bg text-black">栈</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
          {[
            { name: 'Java', color: 'bg-brutal-red' },
            { name: 'Spring Boot', color: 'bg-brutal-green' },
            { name: 'MyBatis', color: 'bg-brutal-blue' },
            { name: 'MySQL', color: 'bg-brutal-purple' },
            { name: 'Oracle', color: 'bg-[#5c4ce1]' },
            { name: 'Redis', color: 'bg-[#f8c201]' },
            { name: 'Vue.js', color: 'bg-[#4ade80]' },
            { name: 'Git/Maven', color: 'bg-black' }
          ].map((tech, i) => (
            <div key={i} className="bg-white brutal-border brutal-shadow rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:-translate-y-2 hover:shadow-[8px_8px_0px_#000] transition-all cursor-pointer">
               <div className={`w-12 h-12 ${tech.color} brutal-border rounded-full`}></div>
               <span className="font-bold whitespace-nowrap">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function ExperienceTab() {
  return (
    <div className="space-y-16">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          工作经历<br/>
          <span className="bg-brutal-yellow highlight-bg">杭州半云科技</span>
        </h2>
      </div>

      {/* Project Card - 黄石项目 */}
      <div className="bg-white brutal-border brutal-shadow rounded-3xl flex flex-col md:flex-row overflow-hidden">
        <div className="p-10 md:p-14 flex-1 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-full bg-brutal-purple flex items-center justify-center text-white brutal-border">
              <Briefcase size={16} />
            </div>
            <span className="font-bold text-xl">杭州半云科技有限公司 / 开发工程师</span>
          </div>

          <div className="mb-6">
            <span className="bg-black text-white px-4 py-1.5 rounded-full text-sm font-bold brutal-border-light inline-block">
              2024.03 - 2024.07
            </span>
          </div>

          <h3 className="text-3xl font-bold mb-4">黄石市数字公共基础设施建设项目</h3>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            基于Spring Boot、MyBatis开发"一标三实"数据治理系统楼栋数据、单位数据采集模块。基于XXL-JOB分布式任务调度框架开发数据抽取、推送等定时功能，对接GIS、CIM数据。进行门楼牌系统制牌申请、审核、网格员管理、数据统计等模块开发。
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="text-xs font-bold px-2 py-1 bg-brutal-blue text-white brutal-border-light rounded">Java</span>
            <span className="text-xs font-bold px-2 py-1 bg-brutal-purple text-white brutal-border-light rounded">Spring Boot</span>
            <span className="text-xs font-bold px-2 py-1 bg-brutal-yellow brutal-border-light rounded">MySQL</span>
            <span className="text-xs font-bold px-2 py-1 bg-brutal-red text-white brutal-border-light rounded">Redis</span>
            <span className="text-xs font-bold px-2 py-1 bg-black text-white brutal-border-light rounded">XXL-JOB</span>
          </div>
          <p className="text-gray-600 text-sm">
            <strong>项目成果：</strong>完成60万+条地址数据的治理工作，通过省级验收，获黄石市政数局书面感谢信
          </p>
        </div>

        <div className="flex-1 bg-brutal-purple p-10 flex items-center justify-center border-t-4 md:border-t-0 md:border-l-[3px] border-black">
          <div className="w-full max-w-[400px] aspect-video bg-white brutal-border rounded-xl flex items-center justify-center relative p-4 shadow-[10px_10px_0px_rgba(0,0,0,0.2)]">
             <div className="w-full h-full border-2 border-black rounded-md flex">
               <div className="w-16 border-r-2 border-black flex flex-col gap-4 p-2 items-center">
                  <div className="w-3 h-3 rounded-full border-2 border-black bg-brutal-red"></div>
                  <div className="w-3 h-3 rounded-full border-2 border-black"></div>
                  <div className="w-3 h-3 rounded-full border-2 border-black"></div>
               </div>
               <div className="flex-1 p-4 flex flex-col gap-4">
                  <div className="w-full h-full bg-brutal-purple brutal-border rounded-md flex items-center justify-center">
                     <Database size={32} />
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                     <div className="w-2/3 h-full bg-brutal-blue border-r border-black"></div>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* Project Card 2 - 阳新县项目 */}
      <div className="bg-white brutal-border brutal-shadow rounded-3xl flex flex-col md:flex-row overflow-hidden">
        <div className="p-10 md:p-14 flex-1 flex flex-col justify-center order-2 md:order-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-full bg-brutal-yellow flex items-center justify-center font-bold text-black brutal-border">
               <Users size={16} />
            </div>
            <span className="font-bold text-xl">杭州半云科技有限公司 / 现场负责人</span>
          </div>

          <div className="mb-6">
            <span className="bg-black text-white px-4 py-1.5 rounded-full text-sm font-bold brutal-border-light inline-block">
              2024.08 - 2025.02
            </span>
          </div>

          <h3 className="text-3xl font-bold mb-4">阳新县数字公共基础设施建设项目</h3>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            前期作为开发工程师对原黄石数据治理系统进行调整开发。后期作为现场负责人与客户、项目集成方对接，将模糊业务需求拆解为具体指标并落地技术方案。统筹政数局、公安、项目集成方需求，建立长效答疑机制，管理400+网格员微信群。
          </p>
          <p className="text-gray-600 text-sm">
            <strong>项目成果：</strong>数据治理成果通过市级、省级验收；98%问题在48小时内解决（350+个问题）
          </p>
        </div>

        <div className="flex-1 bg-brutal-yellow p-10 flex items-center justify-center border-t-4 md:border-t-0 md:border-r-[3px] border-black order-1 md:order-2">
          <div className="w-full max-w-[400px] aspect-square bg-[#fff4d1] brutal-border rounded-full flex items-center justify-center relative p-8">
             <div className="w-full h-full bg-white brutal-border rounded-3xl transform rotate-12 flex items-center justify-center">
                 <div className="grid grid-cols-2 gap-4 w-3/4 h-3/4">
                   <div className="bg-brutal-blue border-2 border-black rounded-lg flex items-center justify-center">
                     <Users size={24} />
                   </div>
                   <div className="bg-brutal-red border-2 border-black rounded-lg flex items-center justify-center">
                     <Database size={24} />
                   </div>
                   <div className="bg-white border-2 border-black rounded-lg col-span-2 flex items-center justify-center">
                     <CheckSquare size={24} />
                   </div>
                 </div>
             </div>
          </div>
        </div>
      </div>

      {/* Project Card 3 - 公安厅项目 */}
      <div className="bg-white brutal-border brutal-shadow rounded-3xl flex flex-col md:flex-row overflow-hidden">
        <div className="p-10 md:p-14 flex-1 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-full bg-brutal-red flex items-center justify-center text-white brutal-border">
              <Briefcase size={16} />
            </div>
            <span className="font-bold text-xl">杭州半云科技有限公司 / 开发工程师</span>
          </div>

          <div className="mb-6">
            <span className="bg-black text-white px-4 py-1.5 rounded-full text-sm font-bold brutal-border-light inline-block">
              2025.03 - 至今
            </span>
          </div>

          <h3 className="text-3xl font-bold mb-4">xx省公安厅制证中心系统国产化改造</h3>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            响应国家信创战略和等保2.0要求，对制证中心系统进行国产化改造，涵盖硬件（华为鲲鹏服务器）、软件（麒麟OS+达梦数据库）及密码算法（SM4）的全栈替换。基于原有业务逻辑将代码改为SpringBoot现代化框架，引入minIO改造文件存储功能。
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            <span className="text-xs font-bold px-2 py-1 bg-brutal-blue text-white brutal-border-light rounded">Java</span>
            <span className="text-xs font-bold px-2 py-1 bg-brutal-green text-white brutal-border-light rounded">达梦数据库</span>
            <span className="text-xs font-bold px-2 py-1 bg-brutal-purple text-white brutal-border-light rounded">麒麟OS</span>
            <span className="text-xs font-bold px-2 py-1 bg-brutal-yellow brutal-border-light rounded">华为鲲鹏</span>
          </div>
          <p className="text-gray-600 text-sm">
            <strong>项目成果：</strong>已完成改造并通过项目终验
          </p>
        </div>

        <div className="flex-1 bg-brutal-red p-10 flex items-center justify-center border-t-4 md:border-t-0 md:border-l-[3px] border-black">
          <div className="w-full max-w-[400px] aspect-video bg-white brutal-border rounded-xl flex items-center justify-center relative p-4 shadow-[10px_10px_0px_rgba(0,0,0,0.2)]">
             <Layout size={48} className="text-brutal-red" />
          </div>
        </div>
      </div>
    </div>
  );
}

function EducationTab() {
  return (
    <div className="mx-auto max-w-4xl space-y-16">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          教育背景<br/>
          <span className="bg-brutal-blue text-white highlight-bg">文华学院</span>
        </h2>
        <p className="text-gray-600">扎实的学术基础为我的职业生涯铺平了道路。</p>
      </div>

      <div className="relative">
         {/* Timeline Line */}
         <div className="absolute left-[39px] top-4 md:bottom-4 bottom-4 w-1 bg-black hidden md:block"></div>

         <div className="space-y-12">
            {/* Edu Item */}
            <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
               <div className="w-20 h-20 shrink-0 bg-brutal-red brutal-border brutal-shadow rounded-full flex items-center justify-center">
                  <GraduationCap size={32} className="text-white" />
               </div>
               <div className="bg-white brutal-border brutal-shadow rounded-3xl p-8 flex-1 relative w-full">
                  <div className="absolute top-10 -left-3 w-6 h-6 bg-white border-b-3 border-l-3 border-black transform rotate-45 hidden md:block"></div>

                  <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                     <h3 className="text-2xl font-bold">文华学院 / 软件工程</h3>
                     <span className="bg-brutal-yellow font-bold px-3 py-1 rounded-full text-sm brutal-border-light">2020-2024 / 本科</span>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    专业排名前10%。主修课程包括：软件工程、软件设计模式、程序设计基础、计算机操作系统、计算机组成原理、模拟电子技术基础、数字电子技术基础。
                  </p>
                  <div className="flex gap-2">
                     <span className="text-xs font-bold px-2 py-1 bg-gray-100 brutal-border-light rounded">专业前10%</span>
                     <span className="text-xs font-bold px-2 py-1 bg-brutal-blue text-white brutal-border-light rounded">本科</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}

function CampusTab() {
  return (
    <div className="space-y-16">
      <div className="text-center space-y-4 mb-20">
        <h2 className="text-4xl md:text-5xl font-bold">
          校园经历<br/>
          <span className="bg-brutal-purple text-white highlight-bg">青春时光</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Campus Experience Card 1 */}
        <div className="relative pt-12 md:pt-0">
           <div className="bg-white brutal-border brutal-shadow rounded-3xl p-10 relative z-10 min-h-[300px] flex flex-col justify-center">
             <div className="absolute -top-6 -left-6 w-14 h-14 bg-black rounded-full flex items-center justify-center text-white text-3xl font-serif">
                "
             </div>

             <p className="text-lg font-medium leading-relaxed mb-8">
               在新媒体运营中心负责公众号内容创作以及发布工作，提升了内容策划和文案撰写能力。
             </p>

             <div>
                <h4 className="font-bold text-xl">新媒体运营中心</h4>
                <p className="text-gray-500">2020.10 - 2021.06</p>
             </div>
           </div>

           {/* Character illustration sticking out on the side */}
           <div className="absolute -right-8 -top-12 md:top-auto md:-bottom-12 w-48 h-48 bg-brutal-red brutal-border rounded-full z-20 flex items-center justify-center overflow-hidden brutal-shadow">
             <div className="w-[80%] h-full bg-brutal-blue mt-12 rounded-t-3xl border-2 border-black relative" style={{ backgroundImage: 'linear-gradient(to right, white 2px, transparent 2px)', backgroundSize: '20px 20px' }}>
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-16 h-16 bg-white border-2 border-black rounded-full/80">
                   <div className="w-full h-8 bg-black rounded-t-full absolute top-0"></div>
                   <div className="w-2 h-2 bg-black rounded-full absolute top-8 left-4"></div>
                   <div className="w-2 h-2 bg-black rounded-full absolute top-8 right-4"></div>
                </div>
             </div>
           </div>
        </div>

        {/* Campus Experience Card 2 */}
        <div className="relative pt-12 md:pt-0 mt-12 md:mt-24">
           <div className="bg-white brutal-border brutal-shadow rounded-3xl p-10 relative z-10 min-h-[300px] flex flex-col justify-center">
             <div className="absolute -top-6 -left-6 w-14 h-14 bg-black rounded-full flex items-center justify-center text-white text-3xl font-serif">
                "
             </div>

             <p className="text-lg font-medium leading-relaxed mb-8">
               作为志愿者进行社区志愿活动，培养了社会责任感和团队协作精神。
             </p>

             <div>
                <h4 className="font-bold text-xl">青年志愿者协会</h4>
                <p className="text-gray-500">2021.09 - 2022.06</p>
             </div>
           </div>

           {/* Character illustration */}
           <div className="absolute -right-8 -top-12 md:top-auto md:-bottom-12 w-48 h-48 bg-brutal-yellow brutal-border rounded-full z-20 flex items-center justify-center overflow-hidden brutal-shadow">
             <div className="w-[80%] h-full bg-black mt-12 rounded-t-3xl border-2 border-black relative">
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-16 h-16 bg-white border-2 border-black rounded-lg">
                   <div className="w-full h-4 bg-brutal-purple border-b-2 border-black absolute top-0"></div>
                   <div className="w-8 h-2 bg-black absolute top-8 left-4 rounded-full"></div>
                </div>
             </div>
           </div>
        </div>

        {/* Campus Experience Card 3 */}
        <div className="relative pt-12 md:pt-0">
           <div className="bg-white brutal-border brutal-shadow rounded-3xl p-10 relative z-10 min-h-[300px] flex flex-col justify-center">
             <div className="absolute -top-6 -left-6 w-14 h-14 bg-black rounded-full flex items-center justify-center text-white text-3xl font-serif">
                "
             </div>

             <p className="text-lg font-medium leading-relaxed mb-8">
               参与校内工作室的开发学习，与团队合作开发工作室资产管理系统，提升了实际项目开发能力。
             </p>

             <div>
                <h4 className="font-bold text-xl">校内工作室开发学习</h4>
                <p className="text-gray-500">2022.06 - 2023.12</p>
             </div>
           </div>

           {/* Character illustration */}
           <div className="absolute -right-8 -top-12 md:top-auto md:-bottom-12 w-48 h-48 bg-brutal-blue brutal-border rounded-full z-20 flex items-center justify-center overflow-hidden brutal-shadow">
             <div className="w-[80%] h-full bg-brutal-yellow mt-12 rounded-t-3xl border-2 border-black relative">
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-16 h-16 bg-white border-2 border-black rounded-full">
                   <div className="w-full h-8 bg-black rounded-t-full absolute top-0"></div>
                   <div className="w-2 h-2 bg-black rounded-full absolute top-6 left-4"></div>
                   <div className="w-2 h-2 bg-black rounded-full absolute top-6 right-4"></div>
                </div>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
