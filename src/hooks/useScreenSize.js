import { useEffect, useState } from 'react';

const getIsMobile = () => window.innerWidth < 768;

export function useScreenSize() {
  const [isMobile, setIsMobile] = useState(getIsMobile());
  const onResize = () => {
    setIsMobile(getIsMobile());
  };
  useEffect(() => {
    window.addEventListener('resize', onResize);

    return () => window.removeEventListener('resize', onResize);
  }, []);

  return isMobile;
}
// const windowWidth = ref(window.innerWidth);

// const onWidthChange = () => windowWidth.value = window.innerWidth;
// onMounted(() => window.addEventListener('resize', onWidthChange));
// onUnmounted(() => window.removeEventListener('resize', onWidthChange));

// const isMobile = computed(() => windowWidth.value < 768);

// return isMobile;
