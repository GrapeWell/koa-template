import { beforeEach, describe, expect, it, vi } from 'vitest'
import prismaMock from '../../utils/__mocks__/prisma'
import Service from './user.service'

vi.mock('../../utils/prisma')

describe('user Service', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  describe('findAll', () => {
    it('should return all users', async () => {
      const mockUsers = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', createdTime: new Date(), updatedTime: new Date() },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', createdTime: new Date(), updatedTime: new Date() },
      ]

      prismaMock.user.findMany.mockResolvedValue(mockUsers)

      const users = await Service.findAll()

      expect(users).toEqual(mockUsers)
    })
  })

  // 补充每个方法的测试
})
