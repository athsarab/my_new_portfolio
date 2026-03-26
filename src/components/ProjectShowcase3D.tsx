import React, { Suspense, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Edges, Float, OrbitControls, Text, useTexture } from '@react-three/drei';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as THREE from 'three';

export type ShowcaseProject = {
  title: string;
  image: string;
  description?: string;
  github: string;
  demo: string;
};

type ProjectShowcase3DProps = {
  projects: ShowcaseProject[];
  className?: string;
};

type CardProps = {
  project: ShowcaseProject;
  indexOnPage: number;
  phase: number;
  isMobile: boolean;
  onSelect: (project: ShowcaseProject) => void;
};

const ProjectCard = memo(function ProjectCard({ project, indexOnPage, phase, isMobile, onSelect }: CardProps) {
  const groupRef = useRef<THREE.Group>(null);
  const cubeRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const texture = useTexture(project.image);

  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = isMobile ? 4 : 12;
  texture.minFilter = THREE.LinearMipmapLinearFilter;
  texture.magFilter = THREE.LinearFilter;

  useFrame(({ clock }, delta) => {
    if (!groupRef.current || !cubeRef.current) {
      return;
    }

    const t = clock.getElapsedTime();
    const floatY = Math.sin(t * 1.05 + phase) * (isMobile ? 0.09 : 0.13);
    const floatX = Math.cos(t * 0.58 + phase) * (isMobile ? 0.02 : 0.045);
    const targetY = 0.16 + Math.sin(indexOnPage * 1.1) * 0.06 + floatY + (hovered ? 0.1 : 0);
    const targetX = (isMobile ? 0 : floatX) * 0.6;
    const targetZ = hovered ? 0.22 : 0;
    const targetXRot = Math.sin(t * 0.6 + phase) * 0.045 + (hovered ? -0.04 : 0.02);
    const targetYRot = (t * 0.22 + phase * 0.1) % (Math.PI * 2) + (hovered ? 0.14 : 0);
    const targetScale = hovered ? 1.05 : 1;

    groupRef.current.position.x = THREE.MathUtils.damp(groupRef.current.position.x, targetX, 6, delta);
    groupRef.current.position.y = THREE.MathUtils.damp(groupRef.current.position.y, targetY, 6, delta);
    groupRef.current.position.z = THREE.MathUtils.damp(groupRef.current.position.z, targetZ, 6, delta);
    groupRef.current.rotation.x = THREE.MathUtils.damp(groupRef.current.rotation.x, targetXRot, 6, delta);
    groupRef.current.rotation.y = THREE.MathUtils.damp(groupRef.current.rotation.y, targetYRot, 6, delta);
    groupRef.current.scale.x = THREE.MathUtils.damp(groupRef.current.scale.x, targetScale, 6, delta);
    groupRef.current.scale.y = THREE.MathUtils.damp(groupRef.current.scale.y, targetScale, 6, delta);
    groupRef.current.scale.z = THREE.MathUtils.damp(groupRef.current.scale.z, targetScale, 6, delta);

    const cubeMaterial = cubeRef.current.material as THREE.MeshStandardMaterial;
    cubeMaterial.emissiveIntensity = THREE.MathUtils.damp(cubeMaterial.emissiveIntensity, hovered ? 0.16 : 0.07, 6, delta);
  });

  return (
    <Float speed={1.1} rotationIntensity={isMobile ? 0.04 : 0.08} floatIntensity={0.2}>
      <group
        ref={groupRef}
        position={[0, 0.16, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={(event) => {
          event.stopPropagation();
          onSelect(project);
        }}
      >
        <mesh ref={cubeRef} castShadow receiveShadow>
          <boxGeometry args={[2.28, 2.28, 2.28]} />
          <meshStandardMaterial
            map={texture}
            color={hovered ? '#ffffff' : '#dce7f8'}
            emissive="#1a2d48"
            emissiveIntensity={0.08}
            metalness={0.22}
            roughness={0.34}
          />
          <Edges scale={1.001} color={hovered ? '#8fb3dc' : '#4a6b92'} threshold={15} />
        </mesh>

        <mesh position={[0, -1.36, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[1.18, 40]} />
          <meshStandardMaterial color="#0b1a2f" emissive="#0f2742" emissiveIntensity={0.12} roughness={0.8} metalness={0.14} />
        </mesh>

        <Text
          position={[0, -1.94, 0]}
          fontSize={0.175}
          maxWidth={2.65}
          anchorX="center"
          anchorY="middle"
          color={hovered ? '#f5faff' : '#d3def2'}
          outlineColor="#07111d"
          outlineWidth={0.014}
        >
          {project.title}
        </Text>
      </group>
    </Float>
  );
});

type CameraRigProps = {
  isMobile: boolean;
};

function CameraRig({ isMobile }: CameraRigProps) {
  const { camera, pointer } = useThree();

  useFrame(({ clock }, delta) => {
    const t = clock.getElapsedTime();
    const sway = isMobile ? 0.03 : 0.07;
    const targetX = pointer.x * (isMobile ? 0.08 : 0.24) + Math.sin(t * 0.26) * sway;
    const targetY = 0.3 + pointer.y * (isMobile ? 0.06 : 0.14) + Math.cos(t * 0.38) * (sway * 0.35);
    const targetZ = isMobile ? 8.2 : 7.6;

    camera.position.x = THREE.MathUtils.damp(camera.position.x, targetX, 2.8, delta);
    camera.position.y = THREE.MathUtils.damp(camera.position.y, targetY, 2.8, delta);
    camera.position.z = THREE.MathUtils.damp(camera.position.z, targetZ, 2.8, delta);
    camera.lookAt(0, 0.1, 0);
  });

  return null;
}

type ShowcaseSceneProps = {
  projects: ShowcaseProject[];
  pageIndex: number;
  onSelectProject: (project: ShowcaseProject) => void;
};

function ShowcaseScene({ projects, pageIndex, onSelectProject }: ShowcaseSceneProps) {
  const { size } = useThree();
  const isMobile = size.width < 768;
  const spacing = isMobile ? 3.5 : 4.15;
  const centerOffset = (projects.length - 1) / 2;

  return (
    <>
      <fog attach="fog" args={['#060d18', 8, 22]} />
      <ambientLight intensity={0.84} />
      <directionalLight position={[6, 8, 5]} intensity={1.22} color="#d8e7ff" />
      <pointLight position={[-5, 2, 4]} intensity={0.6} color="#2d5b92" />
      <pointLight position={[4, 2, 3]} intensity={0.38} color="#365f8f" />
      <CameraRig isMobile={isMobile} />

      {projects.map((project, index) => (
        <group
          key={`${project.title}-${index}`}
          position={[(index - centerOffset) * spacing, 0, -Math.abs(index - centerOffset) * 0.2]}
        >
          <ProjectCard
            project={project}
            indexOnPage={index}
            phase={(pageIndex * 3 + index) * 0.9}
            isMobile={isMobile}
            onSelect={onSelectProject}
          />
        </group>
      ))}

      <mesh position={[0, -4.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[18, 64]} />
        <meshStandardMaterial color="#09101d" emissive="#0b1828" emissiveIntensity={0.2} metalness={0.08} roughness={0.88} />
      </mesh>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableRotate={!isMobile}
        autoRotate={isMobile}
        autoRotateSpeed={0.14}
        enableDamping
        dampingFactor={0.09}
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 2.08}
        minAzimuthAngle={-0.4}
        maxAzimuthAngle={0.4}
        target={[0, 0.1, 0]}
      />
    </>
  );
}

const ProjectShowcase3D: React.FC<ProjectShowcase3DProps> = ({ projects, className = '' }) => {
  const [pageIndex, setPageIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<ShowcaseProject | null>(null);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: '300px 0px' });

  const safeProjects = useMemo(() => projects.filter((project) => project.title.trim().length > 0), [projects]);
  const projectsPerPage = 3;
  const total = safeProjects.length;
  const totalPages = Math.max(1, Math.ceil(total / projectsPerPage));
  const start = pageIndex * projectsPerPage;
  const activeProjects = safeProjects.slice(start, start + projectsPerPage);

  useEffect(() => {
    if (total === 0) {
      if (pageIndex !== 0) {
        setPageIndex(0);
      }
      return;
    }
    if (pageIndex > totalPages - 1) {
      setPageIndex(0);
    }
  }, [pageIndex, total, totalPages]);

  const handleSelectProject = useCallback((project: ShowcaseProject) => {
    setSelectedProject(project);
  }, []);

  const goNext = useCallback(() => {
    if (totalPages === 0) {
      return;
    }
    setPageIndex((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const goPrev = useCallback(() => {
    if (totalPages === 0) {
      return;
    }
    setPageIndex((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  const handleTouchStart = useCallback((event: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.touches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(
    (event: React.TouchEvent<HTMLDivElement>) => {
      if (touchStartX === null) {
        return;
      }
      const delta = event.changedTouches[0].clientX - touchStartX;
      if (delta > 40) {
        goPrev();
      } else if (delta < -40) {
        goNext();
      }
      setTouchStartX(null);
    },
    [goNext, goPrev, touchStartX]
  );

  return (
    <>
      <motion.section
        ref={ref}
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className={`relative overflow-hidden rounded-3xl border border-slate-200/15 bg-gradient-to-br from-[#0a1426]/95 via-[#071022]/88 to-[#030812]/95 p-2 shadow-[0_24px_80px_rgba(4,10,20,0.55)] ${className}`}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(58,93,138,0.25),transparent_46%),radial-gradient(circle_at_82%_78%,rgba(37,68,103,0.2),transparent_50%)]" />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative z-10 mb-4 px-4 pt-4 text-center md:mb-6 md:px-8 md:pt-6"
        >
          <h3 className="mt-2 text-xl font-semibold text-slate-50 md:text-2xl">3D Project Showcase</h3>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.985 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative z-10 w-full"
          style={{ height: '620px' }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {inView && activeProjects.length > 0 ? (
            <Suspense
              fallback={
                <div className="flex h-full w-full items-center justify-center rounded-2xl border border-slate-200/15 bg-black/20 text-xs uppercase tracking-[0.2em] text-slate-200/75">
                  Loading Projects
                </div>
              }
            >
              <Canvas
                shadows
                camera={{ position: [0, 0.4, 10.8], fov: 40 }}
                dpr={[1, 1.4]}
                gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
              >
                <ShowcaseScene projects={activeProjects} pageIndex={pageIndex} onSelectProject={handleSelectProject} />
              </Canvas>
            </Suspense>
          ) : (
            <div className="h-full w-full rounded-2xl border border-slate-200/15 bg-black/20" />
          )}
        </motion.div>

        {total > 0 && (
          <div className="relative z-10 mb-4 mt-4 flex items-center justify-center gap-3">
            <button
              onClick={goPrev}
              className="rounded-full border border-slate-200/20 bg-slate-100/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-100/90 transition hover:bg-slate-100/10"
            >
              Prev
            </button>
            <div className="rounded-full border border-slate-200/20 bg-black/20 px-4 py-2 text-xs tracking-[0.15em] text-slate-200/85">
              {pageIndex + 1} / {totalPages}
            </div>
            <button
              onClick={goNext}
              className="rounded-full border border-slate-200/20 bg-slate-100/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-100/90 transition hover:bg-slate-100/10"
            >
              Next
            </button>
          </div>
        )}
      </motion.section>

      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 px-4 py-10 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.28 }}
            className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/15 bg-[#0f1020]/95 shadow-[0_20px_70px_rgba(0,0,0,0.65)]"
            onClick={(event) => event.stopPropagation()}
          >
            <img src={selectedProject.image} alt={selectedProject.title} className="h-56 w-full object-cover sm:h-64" />
            <div className="p-5 sm:p-6">
              <div className="mb-5 flex items-start justify-between gap-4">
                <h4 className="text-lg font-semibold text-white sm:text-xl">{selectedProject.title}</h4>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="rounded-lg border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.14em] text-indigo-100/80 transition hover:bg-white/10"
                >
                  Close
                </button>
              </div>
              {selectedProject.description && (
                <p className="mb-5 text-sm leading-relaxed text-slate-300">{selectedProject.description}</p>
              )}
              <div className="flex flex-wrap gap-3">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-5 py-2 text-sm font-medium text-white transition hover:brightness-110"
                >
                  GitHub
                </a>
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-indigo-300/40 bg-indigo-500/10 px-5 py-2 text-sm font-medium text-indigo-100 transition hover:bg-indigo-500/20"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default ProjectShowcase3D;
