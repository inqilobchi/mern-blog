import CallToAction from '../components/CallToAction';

export default function Projects() {
  return (
    <div className='min-h-screen max-w-4xl mx-auto flex justify-center gap-8 items-center flex-col p-6'>
      <h1 className='text-4xl font-bold text-center'>Explore Our Projects</h1>
      <p className='text-lg text-gray-600 text-center max-w-3xl'>
        Dive into a collection of fun and engaging projects designed to help you
        learn and master HTML, CSS, and JavaScript. Whether you're a beginner or
        an experienced developer, these projects will challenge your skills and
        inspire creativity. Start building today and take your development
        journey to the next level!
      </p>
      <div className='w-full flex flex-col gap-6'>
        <section className='bg-gray-100 p-6 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold dark:text-gray-900'>
            Why Build Projects?
          </h2>
          <p className='text-gray-700 mt-2'>
            Building projects is one of the best ways to learn programming. It
            allows you to apply theoretical knowledge in a practical way, solve
            real-world problems, and create a portfolio that showcases your
            skills to potential employers or clients.
          </p>
        </section>
        <section className='bg-gray-100 p-6 rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold dark:text-gray-900'>
            What You'll Learn
          </h2>
          <ul className='list-disc list-inside text-gray-700 mt-2'>
            <li>How to structure HTML for clean and semantic code</li>
            <li>Styling with CSS to create visually appealing designs</li>
            <li>Adding interactivity with JavaScript</li>
            <li>Debugging and problem-solving techniques</li>
            <li>Best practices for responsive and accessible web design</li>
          </ul>
        </section>
      </div>
      <div className="relative group w-full max-w-3xl mx-auto">
        <img
          src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1200&auto=format&fit=crop"
          alt="Project Screenshot"
          className="w-full rounded-lg shadow-md transition duration-300 group-hover:brightness-50"
        />
        <a
          href="https://lodex-digital.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center"
        >
        <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md opacity-90 hover:opacity-100 hover:scale-105 transition duration-300 shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF">
            <path d="m226-559 78 33q14-28 29-54t33-52l-56-11-84 84Zm142 83 114 113q42-16 90-49t90-75q70-70 109.5-155.5T806-800q-72-5-158 34.5T492-656q-42 42-75 90t-49 90Zm178-65q-23-23-23-56.5t23-56.5q23-23 57-23t57 23q23 23 23 56.5T660-541q-23 23-57 23t-57-23Zm19 321 84-84-11-56q-26 18-52 32.5T532-299l33 79Zm313-653q19 121-23.5 235.5T708-419l20 99q4 20-2 39t-20 33L538-80l-84-197-171-171-197-84 167-168q14-14 33.5-20t39.5-2l99 20q104-104 218-147t235-24ZM157-321q35-35 85.5-35.5T328-322q35 35 34.5 85.5T327-151q-25 25-83.5 43T82-76q14-103 32-161.5t43-83.5Zm57 56q-10 10-20 36.5T180-175q27-4 53.5-13.5T270-208q12-12 13-29t-11-29q-12-12-29-11.5T214-265Z"/>
          </svg>
          Visit Website
        </button>
        </a>
      </div>
    </div>
  );
}
