export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      booking_queries: {
        Row: {
          budget_per_person: number
          created_at: string
          destination: string
          id: string
          name: string
          number_of_people: number
          phone_number: string
          travel_date: string
        }
        Insert: {
          budget_per_person: number
          created_at?: string
          destination: string
          id?: string
          name: string
          number_of_people: number
          phone_number: string
          travel_date: string
        }
        Update: {
          budget_per_person?: number
          created_at?: string
          destination?: string
          id?: string
          name?: string
          number_of_people?: number
          phone_number?: string
          travel_date?: string
        }
        Relationships: []
      }
      callback_requests: {
        Row: {
          created_at: string
          destination: string
          id: string
          name: string
          phone_number: string
        }
        Insert: {
          created_at?: string
          destination: string
          id?: string
          name: string
          phone_number: string
        }
        Update: {
          created_at?: string
          destination?: string
          id?: string
          name?: string
          phone_number?: string
        }
        Relationships: []
      }
      destinations: {
        Row: {
          cities: string
          created_at: string
          id: string
          img: string
          name: string
        }
        Insert: {
          cities: string
          created_at?: string
          id?: string
          img: string
          name: string
        }
        Update: {
          cities?: string
          created_at?: string
          id?: string
          img?: string
          name?: string
        }
        Relationships: []
      }
      "Map My Tour": {
        Row: {
          created_at: string
          id: number
        }
        Insert: {
          created_at?: string
          id?: number
        }
        Update: {
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      packages: {
        Row: {
          created_at: string
          duration: string
          enum_id: number | null
          id: string
          info: string
          person: string
          place: string
          price: string
          rating_average: number
          rating_total: number
          src: string
          sub_destination_id: string
        }
        Insert: {
          created_at?: string
          duration: string
          enum_id?: number | null
          id?: string
          info: string
          person: string
          place: string
          price: string
          rating_average: number
          rating_total: number
          src: string
          sub_destination_id: string
        }
        Update: {
          created_at?: string
          duration?: string
          enum_id?: number | null
          id?: string
          info?: string
          person?: string
          place?: string
          price?: string
          rating_average?: number
          rating_total?: number
          src?: string
          sub_destination_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "packages_sub_destination_id_fkey"
            columns: ["sub_destination_id"]
            isOneToOne: false
            referencedRelation: "sub_destinations"
            referencedColumns: ["id"]
          },
        ]
      }
      sub_destinations: {
        Row: {
          created_at: string
          destination_id: string
          enum_id: number | null
          id: string
          img: string
          name: string
          packages_count: string
        }
        Insert: {
          created_at?: string
          destination_id: string
          enum_id?: number | null
          id?: string
          img: string
          name: string
          packages_count: string
        }
        Update: {
          created_at?: string
          destination_id?: string
          enum_id?: number | null
          id?: string
          img?: string
          name?: string
          packages_count?: string
        }
        Relationships: [
          {
            foreignKeyName: "sub_destinations_destination_id_fkey"
            columns: ["destination_id"]
            isOneToOne: false
            referencedRelation: "destinations"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
