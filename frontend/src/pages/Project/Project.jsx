import React from 'react'
import ProjectList from './ProjectList'
import ProjectFilter from './ProjectFilter'

export default function Project() {
    return (
        <div className="relative w-full flex justify-start">
            <ProjectFilter />
            <ProjectList />
        </div>
    )
}
