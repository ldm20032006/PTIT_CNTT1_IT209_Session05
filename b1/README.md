# Thực hành Git: add, commit, log, reset, reflog

## Bước 1: Commit khởi tạo

**Lệnh:**
```powershell
git add .
git commit -m "khoi tao"
```

**Kết quả:**
```
[master e52e01f] khoi tao
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 devops/session05/b1/b1.txt
```

> Giải thích: Thêm file `b1.txt` và tạo commit `e52e01f`.

---

## Bước 2: Commit sai cú pháp (lỗi)

**Lệnh:**
```powershell
git add .
git commit - m "fix"
```

**Kết quả (báo lỗi):**
```
error: pathspec '-' did not match any file(s) known to git
error: pathspec 'm' did not match any file(s) known to git
error: pathspec 'fix' did not match any file(s) known to git
```

> Giải thích: Sai cú pháp vì thừa dấu cách giữa `-` và `m`. Đúng phải là `-m`.

---

## Bước 3: Commit đúng cú pháp

**Lệnh:**
```powershell
git commit -m "fix"
```

**Kết quả:**
```
[master c944ae3] fix
 1 file changed, 1 insertion(+)
```

> Giải thích: Commit thành công, tạo commit `c944ae3`.

---

## Bước 4: Xem lịch sử commit

**Lệnh:**
```powershell
git log --oneline
```

**Kết quả:**
```
c944ae3 (HEAD -> master) fix
e52e01f khoi tao
2854194 feat: khoi tao module auth
4c1a85c feat: hoan thien module authentication
```

---

## Bước 5: Reset về commit trước (HEAD~1)

**Lệnh:**
```powershell
git reset --hard HEAD~1
```

**Kết quả:**
```
HEAD is now at e52e01f khoi tao
```

> Giải thích: Quay về commit `e52e01f`, commit `fix` bị mất khỏi `log` (tạm thời).

---

## Bước 6: Kiểm tra log sau reset

**Lệnh:**
```powershell
git log --oneline
```

**Kết quả:**
```
e52e01f (HEAD -> master) khoi tao
2854194 feat: khoi tao module auth
4c1a85c feat: hoan thien module authentication
```

> Giải thích: Commit `c944ae3 fix` không còn hiển thị.

---

## Bước 7: Xem reflog để tìm commit đã mất

**Lệnh:**
```powershell
git reflog
```

**Kết quả:**
```
e52e01f (HEAD -> master) HEAD@{0}: reset: moving to HEAD~1
c944ae3 HEAD@{1}: commit: fix
e52e01f (HEAD -> master) HEAD@{2}: commit: khoi tao
2854194 HEAD@{3}: rebase (abort): returning to refs/heads/master
2854194 HEAD@{4}: rebase (abort): returning to refs/heads/master
00a962c HEAD@{5}: commit: up
2854194 HEAD@{6}: rebase (abort): returning to refs/heads/master
2854194 HEAD@{7}: rebase (abort): returning to refs/heads/master
2854194 HEAD@{8}: rebase (abort): returning to refs/heads/master
9deb1fd HEAD@{9}: commit: add temp file for debug
2f7f005 HEAD@{10}: commit: adds utility functions
2970a67 HEAD@{11}: commit: fix typo
8abadba HEAD@{12}: commit: feat: khoi tao module auth
a8013f2 HEAD@{13}: rebase (start): checkout a8013f23aefafe596049b5643f6214c9519b1d53
2854194 HEAD@{14}: commit: feat: khoi tao module auth
4c1a85c HEAD@{15}: commit (amend): feat: hoan thien module authentication
f9073b7 HEAD@{16}: rebase (finish): returning to refs/heads/master
f9073b7 HEAD@{17}: rebase: fast-forward
4510209 HEAD@{18}: rebase (start): checkout 4510209ce3003e432a7d93735e74b2a031cc1e63
afa792b HEAD@{19}: rebase (finish): returning to refs/heads/master
afa792b HEAD@{20}: rebase (pick): add temp file for debug
f9073b7 HEAD@{21}: rebase (squash): khoi tao auth.js
```

> Giải thích: Tìm lại được `c944ae3` ở `HEAD@{1}`.

---

## Bước 8: Khôi phục commit đã reset

**Lệnh:**
```powershell
git reset --hard c944ae3
```

**Kết quả:**
```
HEAD is now at c944ae3 fix
```

---

## Bước 9: Kiểm tra log sau khôi phục

**Lệnh:**
```powershell
git log --oneline
```

**Kết quả:**
```
c944ae3 (HEAD -> master) fix
e52e01f khoi tao
2854194 feat: khoi tao module auth
4c1a85c feat: hoan thien module authentication
```

> Giải thích: Đã khôi phục thành công commit `fix`.
