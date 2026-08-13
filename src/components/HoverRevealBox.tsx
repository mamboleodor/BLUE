"use client";

import React from "react";
import styled from "styled-components";

interface HoverRevealBoxProps {
  children: React.ReactNode;
  className?: string;
}

const HoverRevealBox = ({ children, className }: HoverRevealBoxProps) => {
  return (
    <StyledWrapper className={className}>
      <div className="hover-box">
        <div className="hover-box-content">{children}</div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .hover-box {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    overflow: hidden;
  }

  .hover-box-content {
    position: relative;
    z-index: 10;
    height: 100%;
  }

  .hover-box::before,
  .hover-box::after {
    position: absolute;
    content: "";
    width: 20%;
    height: 20%;
    background-color: rgba(56, 73, 90, 0.35);
    transition: all 0.5s;
    pointer-events: none;
    z-index: 5;
  }

  .hover-box::before {
    top: 0;
    right: 0;
    border-radius: 0 15px 0 100%;
  }

  .hover-box::after {
    bottom: 0;
    left: 0;
    border-radius: 0 100% 0 15px;
  }

  .hover-box:hover::before,
  .hover-box:hover::after {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    transition: all 0.5s;
  }
`;

export default HoverRevealBox;