export default function CourseCard({ course }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-indigo-600">{course.instrument}</span>
          <span className="px-2 py-1 text-xs font-semibold text-white bg-indigo-600 rounded-full">
            {course.level}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
        <p className="text-gray-600 text-sm mt-1">{course.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-sm text-gray-500">{course.duration}</span>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}