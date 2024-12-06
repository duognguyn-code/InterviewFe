"use client";

import React, { useState } from "react";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import CandidateList from "@/components/candidate-list";

export default function Page() {
  const [currentView, setCurrentView] = useState("candidate");

  const getHeaderTitle = () => {
    switch (currentView) {
      case "home":
        return "Trang chủ";
      case "candidate":
        return "Danh sách ứng viên";
      case "job":
        return "Danh sách công việc";
      case "interview":
        return "Lịch phỏng vấn";
      case "offer":
        return "Danh sách đề nghị";
      case "user":
        return "Danh sách người dùng";
      default:
        return "Trang chủ";
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      <div className="flex-1 flex flex-col">
        <Header title={getHeaderTitle()} />
        <main className="flex-1 p-6 overflow-auto">
          <CandidateList />
        </main>
      </div>
    </div>
  );
}
