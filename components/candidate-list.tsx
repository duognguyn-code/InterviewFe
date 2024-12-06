"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MoreHorizontal, Mail, Phone } from "lucide-react";
import type { Candidate } from "@/types/candidate";

const candidates: Candidate[] = [
  {
    name: "Nguyen Minh Hoai",
    email: "hoamk@gmail.com",
    phoneNo: "0123456789",
    currentPosition: "Developer",
    ownerHR: "admin1",
    status: "Waiting for interview",
  },
  {
    name: "Nguyen Minh Long",
    email: "longmk@gmail.com",
    phoneNo: "0123456789",
    currentPosition: "Developer",
    ownerHR: "admin2",
    status: "Open",
  },
  // Add more sample data as needed
];

export default function CandidateList() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <Input placeholder="Search..." className="max-w-sm" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="waiting">Waiting for interview</SelectItem>
            <SelectItem value="open">Open</SelectItem>
            <SelectItem value="interviewed">Interviewed</SelectItem>
            <SelectItem value="offered">Offered</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
            <SelectItem value="rejected">Offer rejected</SelectItem>
          </SelectContent>
        </Select>
        <Button>Add new</Button>
      </div>

      <div className="border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone No.</TableHead>
              <TableHead>Current Position</TableHead>
              <TableHead>Owner HR</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {candidates.map((candidate) => (
              <TableRow key={candidate.email}>
                <TableCell>{candidate.name}</TableCell>
                <TableCell>{candidate.email}</TableCell>
                <TableCell>{candidate.phoneNo}</TableCell>
                <TableCell>{candidate.currentPosition}</TableCell>
                <TableCell>{candidate.ownerHR}</TableCell>
                <TableCell>{candidate.status}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
