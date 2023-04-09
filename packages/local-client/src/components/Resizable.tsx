import "./Resizable.css";
import { useEffect, useState } from "react";
import { ResizableBox, ResizableBoxProps } from "react-resizable";

interface ResizableProps {
  direction: "horizontal" | "vertical";
  initCellHeight?: number;
  children?: React.ReactNode;
}

const MIN_HEIGHT = 64;
const MIN_INIT_HEIGHT = 100;
const MAX_HEIGHT = 1500;
const MAX_INIT_HEIGHT = 500;

const getValidInitialHeight = (initHeight?: number) => {
  if (!initHeight) return MIN_INIT_HEIGHT;
  return Math.min(Math.max(initHeight, MIN_INIT_HEIGHT), MAX_INIT_HEIGHT);
};

const Resizable: React.FC<ResizableProps> = ({
  direction,
  children,
  initCellHeight,
}) => {
  let resizableProps: ResizableBoxProps;
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [width, setWidth] = useState(window.innerWidth * 0.6);
  const [isResizing, setIsResizing] = useState(false);

  const validInitCellHeight = (initCellHeight =
    getValidInitialHeight(initCellHeight));

  const handleScroll = (e: MouseEvent) => {
    const buffer = 100;
    const scrollSpeedDown = 3;
    const scrollSpeedUp = -3;

    if (e.clientY > window.innerHeight - buffer) {
      window.scrollBy(0, scrollSpeedDown);
    } else if (e.clientY < buffer) {
      window.scrollBy(0, scrollSpeedUp);
    }
  };
  useEffect(() => {
    if (isResizing) {
      window.addEventListener("mousemove", handleScroll);
    }

    return () => {
      window.removeEventListener("mousemove", handleScroll);
    };
  }, [isResizing]);

  useEffect(() => {
    let timer: any;
    const handleWindowResizeEvent = () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        if (window.innerWidth * 0.75 < width) {
          setWidth(window.innerWidth * 0.75);
        } else {
          setInnerWidth(window.innerWidth);
        }
      }, 200);
    };
    window.addEventListener("resize", handleWindowResizeEvent);

    return () => {
      window.removeEventListener("resize", handleWindowResizeEvent);
    };
  }, [width]);

  if (direction === "horizontal") {
    resizableProps = {
      className: "resize-horizontal",
      minConstraints: [innerWidth * 0.2, Infinity],
      maxConstraints: [innerWidth * 0.75, Infinity],
      height: Infinity,
      width,
      resizeHandles: ["e"],
      onResizeStop: (_, data) => {
        setWidth(data.size.width);
      },
    };
  } else {
    resizableProps = {
      minConstraints: [Infinity, MIN_HEIGHT],
      maxConstraints: [Infinity, MAX_HEIGHT],
      height: validInitCellHeight || MIN_INIT_HEIGHT,
      width: Infinity,
      resizeHandles: ["s"],
      onResizeStart: () => {
        setIsResizing(true);
      },
      onResizeStop: () => {
        setIsResizing(false);
      },
    };
  }

  return <ResizableBox {...resizableProps}>{children}</ResizableBox>;
};

export default Resizable;
