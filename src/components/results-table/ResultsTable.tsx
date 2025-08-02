"use client";

import React, { useState, type FC } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ResultsTableProps {
  items: { sum: string | null; date: string | null }[];
}

const ResultsTable: FC<ResultsTableProps> = ({ items }) => {
  return (
    <div>
      <Table className="text-[16px] text-text border-b border-border/30 min-w-[200px]">
        <TableHeader>
          <TableRow className="border-b border-border/30">
            <TableHead className="text-center">Date</TableHead>
            <TableHead className="text-center">Sum</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items.map((item, index) => (
            <TableRow key={index} className="border-b border-border/30">
              <TableHead className="text-center">
                {item.date && item.date.trim() !== ""
                  ? item.date
                  : "recognition error"}
              </TableHead>
              <TableHead className="text-center">
                {item.sum && item.sum.trim() !== ""
                  ? item.sum
                  : "recognition error"}
              </TableHead>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ResultsTable;
