export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          created_at: string
        }
        Insert: {
          id: string
          email: string
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          created_at?: string
        }
      }
      resumes: {
        Row: {
          id: string
          user_id: string
          file_name: string
          content: string
          analysis: Json
          score: number
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          file_name: string
          content: string
          analysis: Json
          score: number
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          file_name?: string
          content?: string
          analysis?: Json
          score?: number
          created_at?: string
        }
      }
      payments: {
        Row: {
          id: string
          user_id: string
          amount: number
          status: string
          reference: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          amount: number
          status: string
          reference: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          amount?: number
          status?: string
          reference?: string
          created_at?: string
        }
      }
    }
  }
}