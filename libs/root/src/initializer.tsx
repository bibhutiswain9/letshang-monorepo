import React from 'react';
import { RecoilRoot } from 'recoil';
import RecoilNexus from 'recoil-nexus';

interface PropsTypes {
  children: React.ReactNode;
}

export default function HOC({ children }: PropsTypes) {
  return (
    <RecoilRoot>
      <RecoilNexus />
      {children}
    </RecoilRoot>
  );
}
