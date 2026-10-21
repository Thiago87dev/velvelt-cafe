export default function PawIcon({ className = 'size-6' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
      strokeLinejoin='round'
      aria-hidden='true'
    >
      <ellipse cx='4.5' cy='9' rx='2' ry='2.75' />
      <ellipse cx='9.5' cy='5' rx='2' ry='2.75' />
      <ellipse cx='15.5' cy='5' rx='2' ry='2.75' />
      <ellipse cx='20' cy='9' rx='2' ry='2.75' />
      <path d='M5 18c0-3 4-7 7-7s7 4 7 7c0 4-5 1-7 1s-7 3-7-1Z' />
    </svg>
  );
}
