import { motion } from "motion/react"

const ProjectDetails = ({
  title,
  description,
  subDescription = [],
  image,
  tags = [],
  href,
  github,
  closeModal,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full px-4 overflow-y-auto backdrop-blur-sm">
      <motion.div
        className="relative my-10 w-full max-w-3xl overflow-hidden border shadow-xl rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        <button
          type="button"
          onClick={closeModal}
          className="absolute z-10 p-2 rounded-sm top-5 right-5 bg-midnight/90 hover:bg-gray-500"
          aria-label="Close project details"
        >
          <img src="assets/close.svg" className="w-6 h-6" alt="" />
        </button>

        <img src={image} alt={title} className="object-cover w-full max-h-80" />

        <div className="p-6">
          <h5 className="mb-3 text-2xl font-bold text-white">{title}</h5>

          <p className="mb-4 font-normal leading-7 text-neutral-400">
            {description}
          </p>

          {subDescription.map((subDesc, index) => (
            <p
              key={`${title}-description-${index}`}
              className="mb-3 font-normal leading-7 text-neutral-400"
            >
              {subDesc}
            </p>
          ))}

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-6">
              {tags.map((tag) =>
                tag.path ? (
                  <img
                    key={tag.id}
                    src={tag.path}
                    alt={tag.name}
                    title={tag.name}
                    className="rounded-lg size-10 hover-animation"
                  />
                ) : (
                  <span
                    key={tag.id}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300"
                  >
                    {tag.name}
                  </span>
                )
              )}
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
            <div className="flex flex-wrap gap-3">
              {href && (
                <a
                  href={href}
                  className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Live Project
                  <img
                    src="assets/arrow-up.svg"
                    className="size-4"
                    alt="Arrow icon"
                  />
                </a>
              )}

              {github && (
                <a
                  href={github}
                  className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View GitHub
                  <img
                    src="assets/arrow-up.svg"
                    className="size-4"
                    alt="Arrow icon"
                  />
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={closeModal}
              className="text-sm text-neutral-400 hover:text-white"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default ProjectDetails