import React, { useState } from "react"
import ProjectDetails from "./ProjectDetails"

const Project = ({
  title,
  description,
  subDescription = [],
  href,
  github,
  image,
  tags = [],
  setPreview,
  onViewCaseStudy,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className="flex-wrap items-center justify-between py-10 space-y-8 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview?.(image)}
        onMouseLeave={() => setPreview?.(null)}
      >
        <div>
          <p className="text-2xl text-white">{title}</p>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-2 text-sand">
              {tags.map((tag) => (
                <span key={tag.id}>{tag.name}</span>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          {onViewCaseStudy && (
            <button
              type="button"
              onClick={() =>
                onViewCaseStudy({
                  title,
                  description,
                  subDescription,
                  href,
                  github,
                  image,
                  tags,
                })
              }
              className="btn-9"
            >
              View Case Study
            </button>
          )}

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-1 cursor-pointer hover-animation"
          >
            Read More
            <img src="assets/arrow-right.svg" className="w-5" alt="" />
          </button>
        </div>
      </div>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      {isOpen && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          github={github}
          closeModal={() => setIsOpen(false)}
        />
      )}
    </>
  )
}

export default Project
