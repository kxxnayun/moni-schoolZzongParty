import { motion } from "motion/react";

type FlyInImageProps = {
  src: string;
  alt?: string;
  className?: string;
  /** 시작 위치(화면 밖). 기본값은 오른쪽 위에서 날아옴 */
  from?: { x?: number; y?: number; rotate?: number };
  /** 여러 장을 순차적으로 날릴 때 시작 지연(초) */
  delay?: number;
};

export default function FlyInImage({
  src,
  alt = "",
  className = "",
  from = { x: 400, y: -300, rotate: 35 },
  delay = 0,
}: FlyInImageProps) {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={className}
      initial={{
        x: from.x ?? 0,
        y: from.y ?? 0,
        rotate: from.rotate ?? 0,
        opacity: 0,
      }}
      animate={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 14,
        delay,
      }}
    />
  );
}
