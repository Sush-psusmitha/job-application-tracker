"use client";

import { Board, Column } from "@/lib/models/models.types";
import { Card,CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle, Calendar, Mic, Award, MoreHorizontal, MoreVertical, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

interface KanbanBoardProps {
    board: Board;
    userId: string;
}

interface ColConfig {
    color: string;
    icon: React.ReactNode;
}

const COLUMN_CONFIG: Array<ColConfig> = [
    {
        color: "bg-cyan-500",
        icon: <Calendar className="h-4 w-4" />,
    },
    {
        color: "bg-purple-500",
        icon: <CheckCircle2 className="h-4 w-4" />,
    },
    {
        color: "bg-green-500",
        icon: <Mic className="h-4 w-4" />,
    },
    {
        color: "bg-yellow-500",
        icon: <Award className="h-4 w-4" />,
    },
    {
        color: "bg-red-500",
        icon: <XCircle className="h-4 w-4" />,
    },
];

function DroppableColumn({
    column,
    config,
    boardId,
}: {
    column: Column;
    config: ColConfig;
    boardId: string;
}) {


    return <Card className="p-2">
      <CardHeader className={`${config.color} `}>
        <div>
          <div className="flex items-center gap-2 text-white">
            {config.icon}
            <CardTitle className="text-base">
             {column.name}
            </CardTitle>
          </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant = "ghost" className="text-white" >
              <MoreVertical />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Trash2/>
              Delete Column
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        </div>

      </CardHeader>
       </Card>;
}

export default function KanbanBoard({ board, userId }: KanbanBoardProps) {
    const columns = board.columns;
    return (
        <div>
            <div>
                {columns.map((col, key) => {
                    const config = COLUMN_CONFIG[key] || {
                        color: "bg-gray-500",
                        icon: <Calendar className="h-4 w-4" />,
                    };
                    return (
                        <DroppableColumn
                            key={col._id || key}
                            column={col}
                            config={config}
                            boardId={board._id}
                        />
                    );
                })}
            </div>
        </div>
    );
}